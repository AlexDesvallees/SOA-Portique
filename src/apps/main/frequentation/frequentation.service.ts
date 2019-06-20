import { Injectable } from '@nestjs/common';
import { FrequentationDTO as Frequentation } from "./frequentation.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FrequentationService {

    constructor(@InjectRepository(Frequentation) private frequentationRepository: Repository<Frequentation>) { }

    async fullUpdateFrequentation(id: number, frequentationDTO: Frequentation) {
        return await this.frequentationRepository
        .query('UPDATE Frequentation SET portique_id = ?, personne_id = ?, date_freq = ?, nb_pers_freq WHERE frequentation_id = ?',
        [frequentationDTO.portique_id, frequentationDTO.personne_id,
            frequentationDTO.date_freq, frequentationDTO.nb_pers_freq, id]);
    }

    async updateFrequentation(id: number, frequentationDTO: Frequentation) {
        return await this.frequentationRepository
        .query('UPDATE Frequentation SET portique_id = ?, personne_id = ?, date_freq = ?, nb_pers_freq WHERE frequentation_id = ?',
        [frequentationDTO.portique_id, frequentationDTO.personne_id,
            frequentationDTO.date_freq, frequentationDTO.nb_pers_freq, id]);
    }

    async addFrequentation(frequentationDTO: Frequentation) {
        return await this.frequentationRepository
        .query('INSERT INTO Frequentation (portique_id, personne_id, date_freq, nb_pers_freq) VALUES (?,?,?,?)',
        [frequentationDTO.portique_id, frequentationDTO.personne_id,
            frequentationDTO.date_freq, frequentationDTO.nb_pers_freq]);
    }

    async deleteFrequentation(id: number) {
        return await this.frequentationRepository.delete(id);
    }

    async getFrequentation(id: number){
        return await this.frequentationRepository
        .query('SELECT * FROM Frequentation WHERE frequentation_id = ' + id); 
    }

    async getAllFrequentation(){
        return await this.frequentationRepository
        .query('SELECT * FROM Frequentation');
    }
}
