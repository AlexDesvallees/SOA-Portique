import { Module } from '@nestjs/common';
import { ProgrammeController } from '../programme/programme.controller';
import { ProgrammeService } from '../programme/programme.service';

@Module({
  imports: [],
  controllers: [ProgrammeController],
  providers: [ProgrammeService],
})
export class ProgrammeModule {}