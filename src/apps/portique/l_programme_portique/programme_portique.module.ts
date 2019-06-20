import { Programme_PortiqueService } from './programme_portique.service';
import { Module } from "@nestjs/common";
import { Programme_PortiqueController } from './programme_portique.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProgrammePortiqueDTO as Programme_Portique} from '../../main/l_programme_portique/programme_portique.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Programme_Portique])],
    controllers: [Programme_PortiqueController],
    providers: [Programme_PortiqueService],
  })
export class Programme_PortiqueModule {}