import { Module } from '@nestjs/common';
import { Programme_PortiqueController } from './programme_portique.controller';
import { Programme_PortiqueService } from './programme_portique.service';

@Module({
  imports: [],
  controllers: [Programme_PortiqueController],
  providers: [Programme_PortiqueService],
})
export class Programme_PortiqueModule {}