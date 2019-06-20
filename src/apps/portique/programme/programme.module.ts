import { ProgrammeService } from './programme.service';
import { Module } from "@nestjs/common";
import { ProgrammeController } from './programme.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgrammeDTO as Programme} from '../../main/programme/programme.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Programme])],
    controllers: [ProgrammeController],
    providers: [ProgrammeService],
  })
export class ProgrammeModule {}