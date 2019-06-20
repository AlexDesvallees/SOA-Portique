import { Module } from '@nestjs/common';
import { ProgrammeController } from './programme.controller';
import { ProgrammeService } from './programme.service';
import { ProgrammeDTO } from './programme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProgrammeDTO])],
  controllers: [ProgrammeController],
  providers: [ProgrammeService],
})
export class ProgrammeModule {}