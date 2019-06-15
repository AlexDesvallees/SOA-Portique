import { Module } from '@nestjs/common';
import { PanneController } from '../panne/panne.controller';
import { PanneService } from '../panne/panne.service';

@Module({
  imports: [],
  controllers: [PanneController],
  providers: [PanneService],
})
export class PanneModule {}