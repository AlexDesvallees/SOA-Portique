import { Module } from '@nestjs/common';
import { FrequentationController } from '../frequentation/frequentation.controller';
import { FrequentationService } from '../frequentation/frequentation.service';

@Module({
  imports: [],
  controllers: [FrequentationController],
  providers: [FrequentationService],
})
export class FrequentationModule {}