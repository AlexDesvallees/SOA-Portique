import { Injectable } from '@nestjs/common';
import { ProgrammeDTO as Programme } from "./programme.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProgrammeService {

    constructor(@InjectRepository(Programme) private programmeRepository: Repository<Programme>) { }
    
    async fullUpdateProgramme(programme: Programme) {
        return await this.programmeRepository
        .query('UPDATE Programme SET numero_programme = ?, date_prog = ? WHERE programme_id = ?',
        [programme.numero_programme, programme.date_prog, programme.programme_id]);
    }

    async updateProgrammeDate(programme: Programme) {
        return await this.programmeRepository
        .query('UPDATE Programme SET date_prog = ? WHERE programme_id = ?',
        [programme.date_prog, programme.programme_id]);
    }

    async updateProgrammeNumber(programme: Programme) {
        return await this.programmeRepository
        .query('UPDATE Programme SET numero_programme = ? WHERE programme_id = ?',
        [programme.numero_programme, programme.programme_id]);
    }

    async addProgramme(programme: Programme) {
        return await this.programmeRepository
        .query('INSERT INTO Programme (numero_programme, date_prog) VALUES (?,?)',
        [programme.numero_programme, programme.date_prog]);
    }

    async deleteProgramme(programmeId: number) {
        return await this.programmeRepository.delete(programmeId);
    }

    async getProgramme(programmeId: number) {
        return await this.programmeRepository.query('SELECT * FROM Prgramme WHERE programme_id = ' + programmeId)
    }

    async getAllProgramme() {
        return await this.programmeRepository.query('SELECT * FROM Programme');
    }
}
