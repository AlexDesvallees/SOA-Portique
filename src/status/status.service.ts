import { Injectable } from '@nestjs/common';
import { StatusDTO as Status } from "./status";

@Injectable()
export class StatusService {
    fullUpdateStatus(statusDTO: Status) {
        return 'This call returns \PATCH request';
    }
    insertStatus(statusDTO: Status) {
        return 'This call returns \POST request';
    }
    updateStatus(statusDTO: Status) {
        return 'This call returns \PUT request';
    }
    addStatus(myDTO: Status) {
        return myDTO;
    }
    deleteStatus(id: string) {
        return 'This call returns \DELETE request';
    }
    getStatus(id: string): string {
        return JSON.stringify({
            '_id': id
        })
    }
    getAllStatus(): string {
        return 'This call returns \GET_All request';
    }
}
