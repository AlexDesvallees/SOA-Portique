import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from "./users/users.module";
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth-role.guard';

@Module({
  imports: [UsersModule],
  controllers: [AppController],
  providers: [AppService, {provide: APP_GUARD, useClass: RolesGuard}],
})
export class AppModule {}
