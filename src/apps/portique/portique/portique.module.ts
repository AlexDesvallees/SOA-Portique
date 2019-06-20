import { PortiqueService } from './portique.service';
import { Module } from "@nestjs/common";
import { PortiqueController } from './portique.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PortiqueDTO as Portique} from '../../main/portique/portique.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Portique])],
    controllers: [PortiqueController],
    providers: [PortiqueService],
  })
export class PortiqueModule {}