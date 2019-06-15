import { Module } from '@nestjs/common';
import { PanneController } from './panne.controller';
import { PanneService } from './panne.service';

@Module({
  imports: [],
  controllers: [PanneController],
  providers: [PanneService],
})
export class PanneModule {}