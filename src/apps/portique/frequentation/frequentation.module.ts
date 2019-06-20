import { FrequentationService } from './frequentation.service';
import { Module } from "@nestjs/common";
import { FrequentationController } from './frequentation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrequentationDTO as Frequentation} from '../../main/frequentation/frequentation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Frequentation])],
    controllers: [FrequentationController],
    providers: [FrequentationService],
  })
export class FrequentationModule {}