import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonneModule } from "./users/users.module";
import { PortiqueModule } from "./portique/portique.module";
import { PanneModule } from "./panne/panne.module";
import { StatusModule } from "./status/status.module";
import { ProgrammeModule } from "./programme/programme.module";
import { OperateurModule } from "./operateur/operateur.module";
import { FrequentationModule } from "./frequentation/frequentation.module";
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth-role.guard';

@Module({
  imports: [PersonneModule, PortiqueModule, PanneModule, StatusModule, ProgrammeModule, OperateurModule, FrequentationModule],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule { }
