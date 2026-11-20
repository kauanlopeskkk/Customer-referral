import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class RabbitMQConsumer implements OnModuleInit {
  private readonly logger = new Logger(RabbitMQConsumer.name);

  onModuleInit() {
    this.logger.log('RabbitMQ Consumer connected and listening for events...');
  }

  // Este método simula o recebimento de uma mensagem da fila
  async handleReferralEvent(payload: any) {
    this.logger.log(`Evento recebido da fila: ${JSON.stringify(payload)}`);
    // Aqui você processaria a recompensa de indicação, envio de e-mail, etc.
  }
}
