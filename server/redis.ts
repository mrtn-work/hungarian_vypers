import Redis from "ioredis";

export const getRedis = () => {
    return new Redis({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT as number|undefined,
    })
}