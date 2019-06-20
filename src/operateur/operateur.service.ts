import { Injectable } from '@nestjs/common';
import { OperateurDTO as Operateur } from "./operateur.entity";

@Injectable()
export class OperateurService {
    fullUpdateOperateur(operateurDTO: Operateur) {
        return 'This call returns \PATCH request';
    }
    insertOperateur(operateurDTO: Operateur) {
        return 'This call returns \POST request';
    }
    updateOperateur(operateurDTO: Operateur) {
        return 'This call returns \PUT request';
    }
    addOperateur(myDTO: Operateur) {
        return myDTO;
    }
    deleteOperateur(id: string) {
        return 'This call returns \DELETE request';
    }
    getOperateur(id: string): string {
        return JSON.stringify({
            '_id': id
        })
    }
    getAllOperateur(): string {
        return 'This call returns \GET_All request';
    }
}
