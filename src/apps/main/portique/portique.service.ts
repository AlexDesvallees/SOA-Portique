import { Injectable } from '@nestjs/common';
import { PortiqueDTO as Portique } from "./portique.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PortiqueService {

    constructor(@InjectRepository(Portique) private portiqueRepository: Repository<Portique>) { }

    async updatePortique(id: number, portique: Portique) {
        return await this.portiqueRepository
        .query('UPDATE Portique SET adresse = ?, operateur_id = ?, ville = ?, code_postal = ?, alarme = ? WHERE portique_id = ?',
        [portique.adresse, portique.operateur_id, portique.ville, portique.code_postal, portique.alarme, id]);
    }

    async addPortique(portique: Portique) {
        return await this.portiqueRepository
        .query('INSERT INTO Portique (operateur_id, adresse, ville, code_postal, alarme) VALUES (?,?,?,?,?)',
        [portique.operateur_id, portique.adresse, portique.ville, portique.code_postal, portique.alarme]);
    }

    async deletePortique(portiqueId: number) {
        return await this.portiqueRepository.delete(portiqueId);
    }

    async getPortique(portiqueId: number){
        return await this.portiqueRepository.query('SELECT * FROM Portique WHERE portique_id = ' + portiqueId);
    }

    async getAllPortique(){
        return await this.portiqueRepository.query('SELECT * FROM Portique');
    }
}
