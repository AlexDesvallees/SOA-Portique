import { ProgrammePortiqueDTO as Programme_Portique } from './../../main/l_programme_Portique/programme_Portique.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Programme_PortiqueService {

    constructor(@InjectRepository(Programme_Portique) private programme_portiqueRepository: Repository<Programme_Portique>) { }

    async getProgramme_Portiques(): Promise<Programme_Portique[]> {
        return await this.programme_portiqueRepository.query("SELECT * FROM L_Programme_Portique");
    }

    async getProgramme_Portique(id: number){
        return await this.programme_portiqueRepository.query('SELECT * FROM L_Programme_Portique WHERE programme_Portique_id = ' + id)
    }

    async deleteProgramme_Portique(id: number) {
        return await this.programme_portiqueRepository.delete(id);
    }

    async addProgramme_Portique(programme_PortiqueDTO: Programme_Portique) {
        return await this.programme_portiqueRepository
        .query('INSERT INTO L_Programme_Portique (programme_id, portique_id) VALUES (?,?)',
        [programme_PortiqueDTO.programme_id, programme_PortiqueDTO.portique_id]);
    }

    async updateProgramme_Portique(id: number, programme_PortiqueDTO: Programme_Portique) {
        return await this.programme_portiqueRepository
        .query('UPDATE L_Programme_Portique SET programme_id = ?, portique_id WHERE programme_portique_id = ?',
        [programme_PortiqueDTO.programme_id, programme_PortiqueDTO.portique_id, id]);
    }
}