import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserModule } from './users/users.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
// import { RolesGuard } from './auth-role.guard';

async function bootstrap() {
  const appPromise = NestFactory.create(AppModule);
  const miscroSPromise = NestFactory.createMicroservice(UserModule, {
    transport: Transport.TCP
  });

  Promise.all([appPromise,miscroSPromise]).then(([app,miscroS])=>{

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

    const microSListenPromise = new Promise(resolve=>{miscroS.listen(() => {
      console.log("MicroService OK !!");
      resolve();
    })});
    return Promise.all([app.listen(port),microSListenPromise]);
  })
}
bootstrap();
