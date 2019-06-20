import { Module } from '@nestjs/common';
import { CompteController } from './compte.controller';
import { CompteService } from './compte.service';

@Module({
  imports: [],
  controllers: [CompteController],
  providers: [CompteService],
})
export class CompteModule {}