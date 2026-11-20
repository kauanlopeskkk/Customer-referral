import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RedisService {
  private readonly logger = new Logger(RedisService.name);
  private readonly store = new Map<string, string>();

  async get(key: string): Promise<string | null> {
    this.logger.log(`GET key: ${key}`);
    return this.store.get(key) ?? null;
  }

  async set(key: string, value: string, ttlSeconds?: number): Promise<void> {
    this.logger.log(`SET key: ${key}`);
    this.store.set(key, value);
  }

  async del(key: string): Promise<void> {
    this.logger.log(`DEL key: ${key}`);
    this.store.delete(key);
  }
}
