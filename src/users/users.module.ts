import { Module } from '@nestjs/common';
import { PersonneController } from './users.controller';
import { PersonneService } from './users.service';

@Module({
  imports: [],
  controllers: [PersonneController],
  providers: [PersonneService],
})
export class PersonneModule {}