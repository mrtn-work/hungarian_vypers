import type {Connection} from "mysql2/promise";
import type {RowDataPacket} from "mysql2";
import type {Server} from "~/types/server";
import type {Admin} from "~/types/admin";
import mysql from "~/server/mysql";

const fetchServers = async (db: Connection) => {
    const [rows] = await db.execute<RowDataPacket[]>('select * from sa_servers')
    return rows as Server[]
}

const fetchAdmins = async (db: Connection) => {
    const [rows] = await db.execute<RowDataPacket[]>('select * from sa_admins where player_steamid != "Console"')
    return rows as Admin[]
}

export default defineEventHandler(async (event) => {
    const db = await mysql()
    const servers = await fetchServers(db)
    const admins = await fetchAdmins(db)
    await db.end()

    return {servers, admins}
})
