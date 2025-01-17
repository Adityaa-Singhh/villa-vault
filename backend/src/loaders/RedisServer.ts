import { RedisClientOptions } from "redis";
import * as redis from 'redis';

import config from "../common/config";

export type RedisClientType = ReturnType<typeof redis.createClient>;

class RedisServer {
    private _redis!: RedisClientType;
    private _port!: number;

    public initialize(): RedisClientType {
        this._port = config.REDIS_PORT;

        if (this._redis) {
            console.log('Redis already running', new Date());
        }

        if (this._redis === undefined) {
            const redisOptions: RedisClientOptions = {
                username: config.REDIS_USERNAME,
                password: config.REDIS_PASSWORD,
                socket: {
                    host: config.REDIS_HOST,
                    port: this._port,
                }
            }

            this._redis = redis.createClient(redisOptions);
        }

        return this._redis;
    }

    public async getValueWithKey(key: string): Promise<string | null> {
        return await this._redis.get(key);
    }

    public close() {
        this._redis.quit();
        console.info("Redis Server Stopped", new Date());
    }

    get instance(): RedisClientType {
        return this._redis;
    }
}

export default RedisServer;
