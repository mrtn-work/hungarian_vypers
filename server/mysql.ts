import mysql from 'mysql2/promise'

export default () => {
    return mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT as number | undefined,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_DATABASE,
    })
}