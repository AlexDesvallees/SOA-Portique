import { Module } from '@nestjs/common';
import { Programme_PortiqueController } from './programme_portique.controller';
import { Programme_PortiqueService } from './programme_portique.service';
import { ProgrammePortiqueDTO as L_Programme_Portique } from './programme_portique.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([L_Programme_Portique])],
  controllers: [Programme_PortiqueController],
  providers: [Programme_PortiqueService],
})
export class Programme_PortiqueModule {}