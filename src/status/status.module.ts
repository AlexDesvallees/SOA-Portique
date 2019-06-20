import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { StatusDTO } from './status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StatusDTO])],
  controllers: [StatusController],
  providers: [StatusService],
})
export class StatusModule {}