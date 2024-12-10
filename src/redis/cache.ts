import { createClient } from 'redis';

const redisClient = createClient({
    url: 'redis://localhost:6379'
});

redisClient.on('error', err => {
    console.log('Redis error ' + err);
});

export const cacheData = async (key: string, value: any) => {
    await redisClient.set(key, JSON.stringify(value));
};

export const getCachedData = async (key: string) => {
    return await redisClient.get(key);
};
