import * as redis from 'redis';

const redisClient = redis.createClient({ url: 'redis://localhost:4379' })

export default redisClient