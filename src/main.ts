import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { RolesGuard } from './auth-role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Guard
  // app.useGlobalGuards(new RolesGuard());

  //Swagger
  const options = new DocumentBuilder()
  .setTitle('API SOA-Portiques')
  .setDescription('The API for the SOA-Portiques Project !!')
  .setVersion('1.0')
  .addTag('Users')
  .addTag('AppDefault')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // await app.listen(process.env.port);
  await app.listen(3000);
}
bootstrap();
