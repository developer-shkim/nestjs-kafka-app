import { Controller, Inject, Post } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'hero',
        brokers: ['localhost:9094'],
      },
      consumer: {
        groupId: 'hero-consumer',
      },
    },
  })
  private client: ClientKafka;

  @Post('notify')
  sendNotification() {
    this.client
      .emit<number>('notify-something', true)
      .subscribe((pubAck) => console.log('==== publisher ', pubAck));
  }
}
