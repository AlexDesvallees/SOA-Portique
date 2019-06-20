import { PortiqueDTO as Portique } from './../../main/portique/portique.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PortiqueService {

    constructor(@InjectRepository(Portique) private portiquesRepository: Repository<Portique>) { }

    async getPortiques(): Promise<Portique[]> {
        return await this.portiquesRepository.query("SELECT * FROM Portique");
    }

    async getPortique(id: number): Promise<Portique[]> {
        return await this.portiquesRepository.query('SELECT * FROM Portique WHERE portique_id = ' + id);
    }

    async deletePortique(id: number){
        return await this.portiquesRepository.delete(id);
    }

    async addPortique(portique: Portique) {
        return await this.portiquesRepository
        .query('INSERT INTO Portique (operateur_id, adresse, ville, code_postal, alarme) VALUES (?,?,?,?,?)',
        [portique.operateur_id, portique.adresse, portique.ville, portique.code_postal, portique.alarme]);
    }

    async updatePortique(id: number, portique: Portique) {
        return await this.portiquesRepository
        .query('UPDATE Portique SET adresse = ?, operateur_id = ?, ville = ?, code_postal = ?, alarme = ? WHERE portique_id = ?',
        [portique.adresse, portique.operateur_id, portique.ville, portique.code_postal, portique.alarme, id]);
    }
}