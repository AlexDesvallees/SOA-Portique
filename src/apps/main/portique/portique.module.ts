import { Module } from '@nestjs/common';
import { PortiqueController } from './portique.controller';
import { PortiqueService } from './portique.service';

@Module({
  imports: [],
  controllers: [PortiqueController],
  providers: [PortiqueService],
})
export class PortiqueModule {}