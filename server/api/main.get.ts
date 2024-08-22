import type {Connection} from "mysql2/promise";
import type {RowDataPacket} from "mysql2";
import type {Server} from "~/types/server";
import type {Admin} from "~/types/admin";
import mysql, {MySQLDatabase} from "~/server/mysql";
import axios from 'axios'
import fakeDataAdmins from "~/server/fakeDataAdmins";
import fakeDataServers from "~/server/fakeDataServers";
import {AppEvent} from "~/types/event";
import fakeDataEvents from "~/server/fakeDataEvents";
import {getRedis} from "~/server/redis";

export const fetchServers = async (db: Connection): Promise<Server[]> => {
    if(process.env.DEMO) return fakeDataServers()
    const [rows] = await db.execute<RowDataPacket[]>('select * from sa_servers')
    return rows as Server[]
}

const fetchAvatars = async (admins: Admin[]): Promise<Admin[]> => {
    const redis = getRedis()

    for(let i = 0; i < admins.length; i++) {
        const admin = admins[i]
        const profileKey = `vypers.steam_avatar_${admin.player_steamid}`
        const url = await redis.get(profileKey)
        if(url != null) admins[i].avatar = url
        else {
            const url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_CLIENT_SECRET}&steamids=${admin.player_steamid}`
            try {
                const res = await axios.get(url)
                const avatar = res?.data?.response?.players?.[0]?.avatarmedium || ''
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

const fetchEvents = async (db: Connection): Promise<AppEvent[]> => {
    if(process.env.DEMO) return fakeDataEvents()
    const [rows] = await db.execute<RowDataPacket[]>('select * from events where end_date > now() order by end_date asc')
    return rows as AppEvent[]
}

export default defineEventHandler(async () => {
    const redis = getRedis()
    const rKey = 'vypers.data.main'

    if(await redis.exists(rKey)) {
        const data = await redis.get(rKey)
        if(data) return JSON.parse(data) as { servers: Server[]; admins: Admin[]; events: AppEvent[] }
    }

    const db = await mysql(MySQLDatabase.SA)
    const servers = await fetchServers(db)
    const admins = await fetchAdmins(db)
    await db.end()
    const eventDB = await mysql(MySQLDatabase.EVENT)
    const events = await fetchEvents(eventDB)
    await eventDB.end()

    const data = {servers, admins, events}

    await redis.setex(rKey, 60 * 60, JSON.stringify(data))

    return data
})
