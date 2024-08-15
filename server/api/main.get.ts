import type {Connection} from "mysql2/promise";
import type {RowDataPacket} from "mysql2";
import type {Server} from "~/types/server";
import type {Admin} from "~/types/admin";
import mysql from "~/server/mysql";
import Redis from "ioredis";
import axios from 'axios'
import fakeDataAdmins from "~/server/fakeDataAdmins";
import fakeDataServers from "~/server/fakeDataServers";

const fetchServers = async (db: Connection): Promise<Server[]> => {
    if(process.env.DEMO) return fakeDataServers()
    const [rows] = await db.execute<RowDataPacket[]>('select * from sa_servers')
    return rows as Server[]
}

const fetchAvatars = async (admins: Admin[]): Promise<Admin[]> => {
    const redis = new Redis({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT as number|undefined,
    })

    for(let i = 0; i < admins.length; i++) {
        const admin = admins[i]
        const profileKey = `steam_avatar_${admin.player_steamid}`
        const url = await redis.get(profileKey)
        if(url != null) admins[i].avatar = url
        else {
            const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_CLIENT_SECRET}&steamids=${admin.player_steamid}`
            try {
                const res = await axios.get(url)
                const avatar = res?.data?.response?.players?.[0]?.avatarmedium || ''
                console.log(res.data.response)
                if(avatar) {
                    redis.setex(profileKey, 60 * 60 * 12, avatar)
                    admins[i].avatar = avatar
                }
            } catch(e: unknown) {
                console.log(`failed to fetch profile for ${admin.player_steamid}`)
            }
        }
    }

    return admins
}

const fetchAdmins = async (db: Connection): Promise<Admin[]> => {
    if(process.env.DEMO) return fakeDataAdmins()
    const [rows] = await db.execute<RowDataPacket[]>('select * from sa_admins where player_steamid != "Console"')
    return await fetchAvatars(rows as Admin[])
}

export default defineEventHandler(async (event) => {
    const db = await mysql()
    const servers = await fetchServers(db)
    const admins = await fetchAdmins(db)
    await db.end()

    return {servers, admins}
})
