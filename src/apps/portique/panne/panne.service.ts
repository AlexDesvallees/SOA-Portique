import { PanneDTO as Panne } from './../../main/panne/panne.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PanneService {

    constructor(@InjectRepository(Panne) private pannesRepository: Repository<Panne>) { }

    async getPannes(): Promise<Panne[]> {
        return await this.pannesRepository.query("SELECT * FROM Panne");
    }

    async getPanne(id: number): Promise<Panne[]> {
        return await this.pannesRepository.query('SELECT * FROM Panne WHERE panne_id = ' + id);
    }

    async deletePanne(panneId: number) {
        return await this.pannesRepository.delete(panneId);
    }

    async addPanne(panne: Panne) {
        return await this.pannesRepository
        .query('INSERT INTO Panne (portique_id, type_panne, date_panne) VALUES (?,?,?)',
        [panne.portique_id, panne.type_panne, panne.date_panne]);
    }

    async updatePanne(id: number, panne: Panne){
        return await this.pannesRepository
        .query('UPDATE Panne SET portique_id = ?, type_panne = ?, date_panne = ? WHERE panne_id = ?',
        [panne.portique_id, panne.type_panne, panne.date_panne, id]);
    }
}