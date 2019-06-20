import { Module } from '@nestjs/common';
import { CompteController } from './compte.controller';
import { CompteService } from './compte.service';
import { CompteDTO } from './compte.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CompteDTO])],
  controllers: [CompteController],
  providers: [CompteService],
})
export class CompteModule {}