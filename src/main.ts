import { NestFactory } from '@nestjs/core';
import { AppModule } from './apps/main/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { MicroServiceModule } from './apps/portique/microService.module';
// import { RolesGuard } from './auth-role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const miscroSPromise = NestFactory.createMicroservice(MicroServiceModule, {
  //   transport: Transport.TCP
  // });

  // Promise.all([appPromise,miscroSPromise]).then(([app,miscroS])=>{

    //Guard
    // app.useGlobalGuards(new RolesGuard());
  
    //Swagger
    const options = new DocumentBuilder()
    .setTitle('API SOA-Portiques')
    .setDescription('The API for the SOA-Portiques Project !!')
    .setVersion('0.4')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
    const port = 3000;
    await app.listen(Number.parseInt(process.env.port) || port);
    console.log("Server listening on port " + port);

    // const microSListenPromise = new Promise(resolve=>{miscroS.listen(() => {
    //   console.log("MicroService OK !!");
    //   resolve();
    // })});
    // return Promise.all([app.listen(port),microSListenPromise]);
  // })
}
bootstrap();
