import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'test-client',
        brokers: ['localhost:9094'],
      },
      consumer: {
        groupId: 'test-consumer-group-id',
      },
    },
  });
  await app.listen(3000);
  await app.startAllMicroservices();
}
bootstrap();
