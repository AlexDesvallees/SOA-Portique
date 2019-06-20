import { ProgrammeDTO as Programme } from './../../main/programme/programme.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammeService {

    constructor(@InjectRepository(Programme) private programmesRepository: Repository<Programme>) { }

    async getProgrammes(): Promise<Programme[]> {
        return await this.programmesRepository.query("SELECT * FROM Programme");
    }

    async getProgramme(id: number): Promise<Programme[]> {
        return await this.programmesRepository.query('SELECT * FROM Programme WHERE programme_id = ' + id);
    }

    async deleteProgramme(id: number){
        return await this.programmesRepository.delete(id);
    }

    async addProgramme(programme: Programme) {
        return await this.programmesRepository
        .query('INSERT INTO Programme (numero_programme, date_prog) VALUES (?,?)',
        [programme.numero_programme, programme.date_prog]);
    }

    async updateProgramme(id: number, programme: Programme) {
        return await this.programmesRepository
        .query('UPDATE Programme SET date_prog = ?, numero_programme = ? WHERE programme_id = ?',
        [programme.date_prog, programme.numero_programme, id]);
    }
}