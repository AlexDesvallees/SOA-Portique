import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonneModule } from "./users/users.module";
import { PortiqueModule } from "./portique/portique.module";
import { PanneModule } from "./panne/panne.module";
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth-role.guard';

@Module({
  imports: [PersonneModule, PortiqueModule, PanneModule],
  controllers: [AppController],
  providers: [AppService, {provide: APP_GUARD, useClass: RolesGuard}],
})
export class AppModule {}
