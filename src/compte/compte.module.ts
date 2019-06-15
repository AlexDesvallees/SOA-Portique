import { Module } from '@nestjs/common';
import { CompteController } from '../compte/compte.controller';
import { CompteService } from '../compte/compte.service';

@Module({
  imports: [],
  controllers: [CompteController],
  providers: [CompteService],
})
export class CompteModule {}