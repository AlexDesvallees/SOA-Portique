import { MicroServiceService } from './microService.service';
import { MicroServiceController } from './microService.controller';
//#region Modules
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortiqueModule } from './portique/portique.module';

@Module({
  imports: [TypeOrmModule.forRoot(
      {
          "type": "mysql",
          "host": "localhost",
          "port": 3306,
          "username": "root",
          "password": "",
          "database": "soa_portique",
          "entities": ["src/users/user.entity.ts"],
          "synchronize": true
      }),
    PortiqueModule
  ],
  controllers: [MicroServiceController],
  providers: [MicroServiceService],
})
export class MicroServiceModule { }