import { Injectable } from '@nestjs/common';
import { PanneDTO as Panne } from "./panne";

@Injectable()
export class PanneService {
    fullUpdatePanne(panneDTO: Panne) {
        return 'This call returns \PATCH request';
    }
    insertPanne(panneDTO: Panne) {
        return 'This call returns \POST request';
    }
    updatePanne(panneDTO: Panne) {
        return 'This call returns \PUT request';
    }
    addPanne(myDTO: Panne) {
        return myDTO;
    }
    deletePanne(userId: string) {
        return 'This call returns \DELETE request';
    }
    getPanne(id: string): string {
        return JSON.stringify({
            '_id': id
        })
    }
    getAllPanne(): string {
        return 'This call returns \GET_All request';
    }
}
