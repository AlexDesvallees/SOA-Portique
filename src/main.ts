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
  .setVersion('0.2')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // await app.listen(process.env.port);
  const port = 3000;
  console.log("Server listening on port " + port);
  await app.listen(port);
}
bootstrap();
