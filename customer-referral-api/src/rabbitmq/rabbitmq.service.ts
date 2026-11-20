import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RabbitMQService {
  private readonly logger = new Logger(RabbitMQService.name);

  async publish(queue: string, message: any): Promise<void> {
    this.logger.log(`Publishing message to queue [${queue}]: ${JSON.stringify(message)}`);
  }
}
