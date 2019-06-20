import { Module } from '@nestjs/common';
import { FrequentationController } from './frequentation.controller';
import { FrequentationService } from './frequentation.service';

@Module({
  imports: [],
  controllers: [FrequentationController],
  providers: [FrequentationService],
})
export class FrequentationModule {}