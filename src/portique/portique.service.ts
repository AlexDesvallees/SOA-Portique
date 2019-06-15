import { Injectable } from '@nestjs/common';
import { PortiqueDTO as Portique } from "./portique";

@Injectable()
export class PortiqueService {
    fullUpdatePortique(portiqueDTO: Portique) {
        return 'This call returns \PATCH request';
    }
    insertPortique(portiqueDTO: Portique) {
        return 'This call returns \POST request';
    }
    updatePortique(portiqueDTO: Portique) {
        return 'This call returns \PUT request';
    }
    addPortique(myDTO: Portique) {
        return myDTO;
    }
    deletePortique(userId: string) {
        return 'This call returns \DELETE request';
    }
    getPortique(id: string): string {
        return JSON.stringify({
            '_id': id
        })
    }
    getAllPortique(): string {
        return 'This call returns \GET_All request';
    }
}
