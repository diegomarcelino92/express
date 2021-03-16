import redis, { RedisClient } from 'redis';

class RedisCache {
  client: RedisClient

  constructor() {
    this.client = redis.createClient();
  }

  getCache = (key: string) => new Promise((resolve, reject) => {
    this.client.get(key, (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  })

  setCache = (key: string, value: string) => new Promise((resolve, reject) => {
    this.client.set(key, value, 'EX', 10, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  })
}

export default new RedisCache();
