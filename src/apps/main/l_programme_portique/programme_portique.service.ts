import { Injectable } from '@nestjs/common';
import { ProgrammePortiqueDTO as L_Programme_Portique } from "./programme_portique.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Programme_PortiqueService {

    constructor(@InjectRepository(L_Programme_Portique) private programmePortiqueRepository: Repository<L_Programme_Portique>) { }

    async fullUpdateProgramme_Portique(id: number, programme_PortiqueDTO: L_Programme_Portique) {
        return await this.programmePortiqueRepository
        .query('UPDATE L_Programme_Portique SET programme_id = ?, portique_id WHERE programme_portique_id = ?',
        [programme_PortiqueDTO.programme_id, programme_PortiqueDTO.portique_id, id]);
    }

    async updateProgramme_Portique(id: number, programme_PortiqueDTO: L_Programme_Portique) {
        return await this.programmePortiqueRepository
        .query('UPDATE L_Programme_Portique SET programme_id = ?, portique_id WHERE programme_portique_id = ?',
        [programme_PortiqueDTO.programme_id, programme_PortiqueDTO.portique_id, id]);
    }

    async addProgramme_Portique(programme_PortiqueDTO: L_Programme_Portique) {
        return await this.programmePortiqueRepository
        .query('INSERT INTO L_Programme_Portique (programme_id, portique_id) VALUES (?,?)',
        [programme_PortiqueDTO.programme_id, programme_PortiqueDTO.portique_id]);
    }

    async deleteProgramme_Portique(id: number) {
        return await this.programmePortiqueRepository.delete(id);
    }

    async getProgramme_Portique(id: number){
        return await this.programmePortiqueRepository
        .query('SELECT * FROM L_Programme_Portique WHERE programme_portique_id = ' + id);
    }

    async getAllProgramme_Portique(){
        return await this.programmePortiqueRepository
        .query('SELECT * FROM L_Programme_Portique');
    }
}
