import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
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
    },
  );

  app.listen();
}
bootstrap();
