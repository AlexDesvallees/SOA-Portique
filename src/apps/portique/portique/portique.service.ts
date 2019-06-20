import { PortiqueDTO } from './../../main/portique/portique.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PortiqueService {
    constructor(@InjectRepository(PortiqueDTO) private portiquesRepository: Repository<PortiqueDTO>) { }

    async getPortiques(): Promise<PortiqueDTO[]> {
        return await this.portiquesRepository.query("SELECT * FROM Portique");
    }
}