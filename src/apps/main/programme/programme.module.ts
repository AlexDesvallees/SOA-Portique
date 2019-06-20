import { Module } from '@nestjs/common';
import { ProgrammeController } from './programme.controller';
import { ProgrammeService } from './programme.service';

@Module({
  imports: [],
  controllers: [ProgrammeController],
  providers: [ProgrammeService],
})
export class ProgrammeModule {}