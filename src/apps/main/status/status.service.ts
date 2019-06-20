import { Injectable } from '@nestjs/common';
import { StatusDTO as Status } from "./status.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {

    constructor(@InjectRepository(Status) private statusRepository: Repository<Status>) { }

    async updateStatus(status: Status) {
        return await this.statusRepository
        .query('UPDATE Status SET role = ? WHERE status_id = ?', [status.role, status.status_id]);
    }

    async addStatus(status: Status) {
        return await this.statusRepository
        .query('INSERT INTO Status (status_id, role) VALUES (?,?)', [status.status_id, status.role]);
    }

    async deleteStatus(statusId: number) {
        return await this.statusRepository.delete(statusId)
    }

    async getStatus(statusId: number) {
        return await this.statusRepository.query('SELECT * FROM Status WHERE status_id = ' + statusId);
    }

    async getAllStatus() {
        return await this.statusRepository.query('SELECT * FROM Status');
    }
}
