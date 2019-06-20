import { NestFactory } from '@nestjs/core';
import { AppModule } from './apps/main/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { MicroServiceModule } from './apps/portique/microService.module';

async function bootstrap() {
    const port = 3001;
    const app = await NestFactory.createMicroservice(MicroServiceModule, {
        transport: Transport.TCP,
        options: {
            port: Number.parseInt(process.env.port) || port
        }
      });
      app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
