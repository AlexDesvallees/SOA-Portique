import { Module } from '@nestjs/common';
import { OperateurController } from './operateur.controller';
import { OperateurService } from './operateur.service';

@Module({
  imports: [],
  controllers: [OperateurController],
  providers: [OperateurService],
})
export class OperateurModule {}