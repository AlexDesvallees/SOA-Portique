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
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programme_PortiqueModule } from './l_programme_portique/programme_portique.module';

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
    CompteModule,
    Programme_PortiqueModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
