import { Injectable } from '@nestjs/common';
import { CompteDTO as Compte } from "./compte.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CompteService {

    constructor(@InjectRepository(Compte) private compteRepository: Repository<Compte>) { }

    async fullUpdateCompte(id: number, compteDTO: Compte) {
        return await this.compteRepository
        .query('UPDATE Compte SET solde = ?, date_validite = ? WHERE compte_id = ?',
        [compteDTO.solde, compteDTO.date_validite, id]);
    }

    async updateCompte(id: number, compteDTO: Compte) {
        return await this.compteRepository
        .query('UPDATE Compte SET solde = ?, date_validite = ? WHERE compte_id = ?',
        [compteDTO.solde, compteDTO.date_validite, id]);
    }

    async addCompte(compteDTO: Compte) {
        return await this.compteRepository
        .query('INSERT INTO Compte (solde, date_validite) VALUES (?,?)',
        [compteDTO.solde, compteDTO.date_validite]);
    }

    async deleteCompte(id: number) {
        return await this.compteRepository.delete(id);
    }

    async getCompte(id: number){
        return await this.compteRepository
        .query('SELECT * FROM Compte WHERE compte_id = ' + id);
    }

    async getAllCompte(){
        return await this.compteRepository.query('SELECT * From Compte');
    }
}
