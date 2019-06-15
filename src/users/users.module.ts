import { Module } from '@nestjs/common';
import { PersonneController } from '../users/users.controller';
import { PersonneService } from '../users/users.service';

@Module({
  imports: [],
  controllers: [PersonneController],
  providers: [PersonneService],
})
export class PersonneModule {}