import { NextFunction, Request, Response } from 'express';
import redis, { RedisClient } from 'redis';

class Redis {
  client: RedisClient

  constructor() {
    this.client = redis.createClient();
  }

  // Middleware pare validação de cache
  caching = async (req: Request, res: Response, next: NextFunction) => {
    const { cep } = req.params;

    const formattedCep = cep.replace(/\D/g, '');

    const cache = await this.getCache(formattedCep);

    if (cache) {
      const data = JSON.parse(cache as string);

      res.json(data);
    } else {
      next();
    }
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
    this.client.set(key, value, 'EX', 10000, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  })
}

export default new Redis();
