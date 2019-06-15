import { Module } from '@nestjs/common';
import { PortiqueController } from '../portique/portique.controller';
import { PortiqueService } from '../portique/portique.service';

@Module({
  imports: [],
  controllers: [PortiqueController],
  providers: [PortiqueService],
})
export class PortiqueModule {}