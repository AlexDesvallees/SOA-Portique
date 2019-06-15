import { Module } from '@nestjs/common';
import { OperateurController } from '../operateur/operateur.controller';
import { OperateurService } from '../operateur/operateur.service';

@Module({
  imports: [],
  controllers: [OperateurController],
  providers: [OperateurService],
})
export class OperateurModule {}