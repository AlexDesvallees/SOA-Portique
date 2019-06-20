import { Module } from '@nestjs/common';
import { FrequentationController } from './frequentation.controller';
import { FrequentationService } from './frequentation.service';
import { FrequentationDTO as Frequentation } from './frequentation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Frequentation])],
  controllers: [FrequentationController],
  providers: [FrequentationService],
})
export class FrequentationModule {}