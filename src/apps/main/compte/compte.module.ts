import { Module } from '@nestjs/common';
import { CompteController } from './compte.controller';
import { CompteService } from './compte.service';
import { CompteDTO as Compte} from './compte.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Compte])],
  controllers: [CompteController],
  providers: [CompteService],
})
export class CompteModule {}