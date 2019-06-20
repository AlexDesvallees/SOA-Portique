import { Injectable } from '@nestjs/common';
import { PanneDTO as Panne } from "./panne.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PanneService {

    constructor(@InjectRepository(Panne) private panneRepository: Repository<Panne>) { }

    async addPanne(panne: Panne) {
        return await this.panneRepository
        .query('INSERT INTO Panne (portique_id, type_panne, date_panne) VALUES (?,?,?)',
        [panne.portique_id, panne.type_panne, panne.date_panne]);
    }

    async updatePanne(id: number, panne: Panne){
        return await this.panneRepository
        .query('UPDATE Panne SET portique_id = ?, type_panne = ?, date_panne = ? WHERE panne_id = ?',
        [panne.portique_id, panne.type_panne, panne.date_panne, id]);
    }

    async deletePanne(panneId: number) {
        return await this.panneRepository.delete(panneId);
    }

    async getPanne(panneId: number){
        return await this.panneRepository.query('SELECT * FROM Panne WHERE panne_id = ' + panneId);
    }

    async getAllPanne(){
        return await this.panneRepository.query('SELECT * FROM Panne');
    }
}
