import { Module } from '@nestjs/common';
import { PanneController } from './panne.controller';
import { PanneService } from './panne.service';
import { PanneDTO } from './panne.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PanneDTO])],
  controllers: [PanneController],
  providers: [PanneService],
})
export class PanneModule {}