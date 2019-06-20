import { PanneService } from './panne.service';
import { Module } from "@nestjs/common";
import { PanneController } from './panne.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PanneDTO as Panne} from '../../main/panne/panne.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Panne])],
    controllers: [PanneController],
    providers: [PanneService],
  })
export class PanneModule {}