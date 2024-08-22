import {getRedis} from "~/server/redis";

export default defineEventHandler(async () => {
    const redis = getRedis()
    redis.keys('prefix:vypers*', (err, keys) => {
        if(err) return console.error('Failed to get keys:', err)
        if(!keys) return

        redis.del(keys)
    })

    return { message: 'Success', hard: true }
})