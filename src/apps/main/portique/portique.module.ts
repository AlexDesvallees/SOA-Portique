import { Module } from '@nestjs/common';
import { PortiqueController } from './portique.controller';
import { PortiqueService } from './portique.service';
import { PortiqueDTO } from './portique.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PortiqueDTO])],
  controllers: [PortiqueController],
  providers: [PortiqueService],
})
export class PortiqueModule {}