import { Injectable } from '@nestjs/common';
import { PortiqueDTO as Portique } from "./portique.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PortiqueService {

    constructor(@InjectRepository(Portique) private portiqueRepository: Repository<Portique>) { }

    async updatePortiqueOperateur(portique: Portique) {
        return await this.portiqueRepository
        .query('UPDATE Portique SET operateur_id = ? WHERE portique_id = ?', [portique.operateur_id, portique.portique_id]);
    }

    async updatePortiqueAdresse(portique: Portique) {
        return await this.portiqueRepository
        .query('UPDATE Portique SET adresse = ? WHERE portique_id = ?', [portique.adresse, portique.portique_id]);
    }

    async updatePortiqueVille(portique: Portique) {
        return await this.portiqueRepository
        .query('UPDATE Portique SET ville = ? WHERE portique_id = ?', [portique.ville, portique.portique_id]);
    }

    async updatePortiqueCodePostal(portique: Portique) {
        return await this.portiqueRepository
        .query('UPDATE Portique SET code_postal = ? WHERE portique_id = ?', [portique.code_postal, portique.portique_id]);
    }

    async updatePortiqueAlarme(portique: Portique) {
        return await this.portiqueRepository
        .query('UPDATE Portique SET alarme = ? WHERE portique_id = ?', [portique.operateur_id, portique.alarme]);
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
