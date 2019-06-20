import { MicroServiceService } from './microService.service';
import { MicroServiceController } from './microService.controller';
//#region Modules
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortiqueModule } from './portique/portique.module';
import { ProgrammeModule } from './programme/programme.module';
import { PanneModule } from './panne/panne.module';
import { OperateurModule } from './operateur/operateur.module';
import { FrequentationModule } from './frequentation/frequentation.module';
import { Programme_PortiqueModule } from './l_programme_portique/programme_portique.module';

@Module({
  imports: [TypeOrmModule.forRoot(
      {
          "type": "mysql",
          "host": "localhost",
          "port": 3306,
          "username": "root",
          "password": "",
          "database": "soa_portique",
          "entities": ["./**/*.entity.ts"],
          "synchronize": true
      }),
    PortiqueModule,
    ProgrammeModule,
    PanneModule,
    OperateurModule,
    FrequentationModule,
    Programme_PortiqueModule
  ],
  controllers: [MicroServiceController],
  providers: [MicroServiceService],
})
export class MicroServiceModule { }