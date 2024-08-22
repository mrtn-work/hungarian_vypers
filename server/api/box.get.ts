import type {Connection} from "mysql2/promise";
import type {RowDataPacket} from "mysql2";
import {Boxes} from "~/types/boxes";
import mysql, {MySQLDatabase} from "~/server/mysql";
import {fetchServers} from "~/server/api/main.get";
import {Server} from "~/types/server";
import axios from "axios";
import {getRedis} from "~/server/redis";

const fetchActivePlayersForServer = async (server: Server): Promise<number> => {
    const url = `https://api.steampowered.com/IGameServersService/GetServerList/v1/?key=${process.env.STEAM_CLIENT_SECRET}&filter=addr\\${server.address}`
    try {
        const res = await axios.get(url)
        const data = res.data?.response?.servers?.[0]?.players
        console.log(data, res.data.response)
        if(!data) return 0
        return data
    } catch(e: unknown) {
        console.error('Error fetching server players:', e)
    }
    return 0
}

const fetchInfoBox = async (db: Connection, k4DB: Connection): Promise<Boxes> => {
    if(process.env.DEMO) return {players: 1_145, customPlayers: 10_018, servers: 5}

    const redis = getRedis()

    const rKey = 'vypers.data.box-info-data'

    if(await redis.exists(rKey)) {
        const data = await redis.get(rKey)
        if(data) return JSON.parse(data) as Boxes
    }

    const [rows] = await db.execute<RowDataPacket[]>('select count(*) as total from sa_servers')
    const serversCount = rows[0]['total'] || 0

    const [rows2] = await k4DB.execute<RowDataPacket[]>('select count(*) as total from k4stats')
    const customPlayers = rows2[0]['total'] || 0

    const servers = await fetchServers(db)
    let activePlayers = 0

    for(let i = 0; i < servers.length; i++) {
        activePlayers += await fetchActivePlayersForServer(servers[i])
    }

    const cacheData = {
        servers: serversCount,
        customPlayers,
        players: activePlayers,
    }

    redis.setex(rKey, 60 * 30, JSON.stringify(cacheData))

    return cacheData
}

export default defineEventHandler(async () => {
    const db = await mysql(MySQLDatabase.SA)
    const db2 = await mysql(MySQLDatabase.K4)
    const boxes = await fetchInfoBox(db, db2)
    await db.end()
    await db2.end()

    return {boxes}
})
