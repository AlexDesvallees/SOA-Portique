import { Injectable } from '@nestjs/common';
import { OperateurDTO as Operateur } from "./operateur.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OperateurService {

    constructor(@InjectRepository(Operateur) private operateurRepository: Repository<Operateur>) { }

    async fullUpdateOperateur(id:number, operateur: Operateur) {
        return await this.operateurRepository
        .query('UPDATE Personne SET nom = ?, prenom = ? WHERE operateur_id = ?',
        [operateur.nom, operateur.prenom, id]);
    }

    async updateOperateur(id: number, operateur: Operateur) {
        return await this.operateurRepository
        .query('UPDATE Personne SET nom = ?, prenom = ? WHERE operateur_id = ?',
        [operateur.nom, operateur.prenom, id]);
    }

    async addOperateur(operateur: Operateur) {
        return await this.operateurRepository
        .query('INSERT INTO Operateur (nom, prenom) VALUES (?,?)',
        [operateur.nom, operateur.prenom]);
    }

    async deleteOperateur(id: string) {
        return this.operateurRepository.delete(id);
    }

    async getOperateur(id: number){
        return await this.operateurRepository.query('SELECT * FROM Operateur WHERE operateur_id = ' + id)
    }

    async getAllOperateur(){
        return await this.operateurRepository.query('SELECT * FROM Operateur');
    }
}
