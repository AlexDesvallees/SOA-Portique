import { Module } from '@nestjs/common';
import { OperateurController } from './operateur.controller';
import { OperateurService } from './operateur.service';
import { OperateurDTO as Operateur } from './operateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Operateur])],
  controllers: [OperateurController],
  providers: [OperateurService],
})
export class OperateurModule {}