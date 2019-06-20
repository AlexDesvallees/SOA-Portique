import { OperateurDTO as Operateur } from './../../main/operateur/operateur.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OperateurService {

    constructor(@InjectRepository(Operateur) private operateursRepository: Repository<Operateur>) { }

    async getOperateurs(): Promise<Operateur[]> {
        return await this.operateursRepository.query("SELECT * FROM Operateur");
    }

    async getOperateur(id: number){
        return await this.operateursRepository.query('SELECT * FROM Operateur WHERE operateur_id = ' + id)
    }

    async deleteOperateur(id: number) {
        return this.operateursRepository.delete(id);
    }

    async addOperateur(operateur: Operateur) {
        return await this.operateursRepository
        .query('INSERT INTO Operateur (nom, prenom) VALUES (?,?)',
        [operateur.nom, operateur.prenom]);
    }

    async updateOperateur(id: number, operateur: Operateur) {
        return await this.operateursRepository
        .query('UPDATE Personne SET nom = ?, prenom = ? WHERE operateur_id = ?',
        [operateur.nom, operateur.prenom, id]);
    }
}