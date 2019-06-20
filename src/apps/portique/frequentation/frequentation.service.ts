import { FrequentationDTO as Frequentation } from './../../main/frequentation/frequentation.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FrequentationService {

    constructor(@InjectRepository(Frequentation) private frequentationsRepository: Repository<Frequentation>) { }

    async getFrequentations(): Promise<Frequentation[]> {
        return await this.frequentationsRepository.query("SELECT * FROM Frequentation");
    }

    async getFrequentation(id: number){
        return await this.frequentationsRepository.query('SELECT * FROM Frequentation WHERE frequentation_id = ' + id)
    }

    async deleteFrequentation(id: number) {
        return await this.frequentationsRepository.delete(id);
    }

    async addFrequentation(frequentationDTO: Frequentation) {
        return await this.frequentationsRepository
        .query('INSERT INTO Frequentation (portique_id, personne_id, date_freq, nb_pers_freq) VALUES (?,?,?,?)',
        [frequentationDTO.portique_id, frequentationDTO.personne_id,
            frequentationDTO.date_freq, frequentationDTO.nb_pers_freq]);
    }

    async updateFrequentation(id: number, frequentationDTO: Frequentation) {
        return await this.frequentationsRepository
        .query('UPDATE Frequentation SET portique_id = ?, personne_id = ?, date_freq = ?, nb_pers_freq WHERE frequentation_id = ?',
        [frequentationDTO.portique_id, frequentationDTO.personne_id,
            frequentationDTO.date_freq, frequentationDTO.nb_pers_freq, id]);
    }
}