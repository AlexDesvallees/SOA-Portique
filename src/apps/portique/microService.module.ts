//#region Modules
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    }
  )
  ],
  controllers: [],
  providers: [],
})
export class MicroServiceModule {
  constructor() {}
}