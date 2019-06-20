import { OperateurService } from './operateur.service';
import { Module } from "@nestjs/common";
import { OperateurController } from './operateur.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperateurDTO as Operateur} from '../../main/operateur/operateur.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Operateur])],
    controllers: [OperateurController],
    providers: [OperateurService],
  })
export class OperateurModule {}