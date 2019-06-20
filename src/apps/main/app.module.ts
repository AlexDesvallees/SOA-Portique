//#region Modules
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./users/users.module";
import { PortiqueModule } from "./portique/portique.module";
import { PanneModule } from "./panne/panne.module";
import { StatusModule } from "./status/status.module";
import { ProgrammeModule } from "./programme/programme.module";
import { OperateurModule } from "./operateur/operateur.module";
import { FrequentationModule } from "./frequentation/frequentation.module";
import { CompteModule } from "./compte/compte.module";
//#endregion
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth-role.guard';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    PortiqueModule,
    PanneModule,
    StatusModule,
    ProgrammeModule,
    OperateurModule,
    FrequentationModule,
    CompteModule
  ],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}