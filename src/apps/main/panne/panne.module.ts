import { Module } from '@nestjs/common';
import { PanneController } from './panne.controller';
import { PanneService } from './panne.service';
import { PanneDTO as Panne} from './panne.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Panne])],
  controllers: [PanneController],
  providers: [PanneService],
})
export class PanneModule {}