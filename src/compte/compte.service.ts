import { Injectable } from '@nestjs/common';
import { CompteDTO as Compte } from "./compte.entity";

@Injectable()
export class CompteService {
    fullUpdateCompte(compteDTO: Compte) {
        return 'This call returns \PATCH request';
    }
    insertCompte(compteDTO: Compte) {
        return 'This call returns \POST request';
    }
    updateCompte(compteDTO: Compte) {
        return 'This call returns \PUT request';
    }
    addCompte(myDTO: Compte) {
        return myDTO;
    }
    deleteCompte(id: string) {
        return 'This call returns \DELETE request';
    }
    getCompte(id: string): string {
        return JSON.stringify({
            '_id': id
        })
    }
    getAllCompte(): string {
        return 'This call returns \GET_All request';
    }
}
