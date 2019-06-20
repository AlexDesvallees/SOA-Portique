import { Module } from '@nestjs/common';
import { OperateurController } from './operateur.controller';
import { OperateurService } from './operateur.service';
import { OperateurDTO } from './operateur.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OperateurDTO])],
  controllers: [OperateurController],
  providers: [OperateurService],
})
export class OperateurModule {}