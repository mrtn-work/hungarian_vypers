import mysql from 'mysql2/promise'

export enum MySQLDatabase {
    K4 = 'K4_',
    SA = 'SA_',
    EVENT = 'EV_',
}

export default (env: MySQLDatabase) => {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT as number | undefined,
        user: process.env[env + 'USER'],
        password: process.env[env + 'PASS'],
        database: process.env[env + 'DATABASE'],
    })
}