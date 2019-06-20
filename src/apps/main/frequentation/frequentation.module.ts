import { Module } from '@nestjs/common';
import { FrequentationController } from './frequentation.controller';
import { FrequentationService } from './frequentation.service';
import { FrequentationDTO } from './frequentation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([FrequentationDTO])],
  controllers: [FrequentationController],
  providers: [FrequentationService],
})
export class FrequentationModule {}