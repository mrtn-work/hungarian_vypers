import {getRedis} from "~/server/redis";

export default defineEventHandler(async () => {
    const redis = getRedis()
    await redis.flushdb()
    return { message: 'Success', hard: true }
})