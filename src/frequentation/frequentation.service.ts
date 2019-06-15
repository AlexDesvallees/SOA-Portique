import { Injectable } from '@nestjs/common';
import { FrequentationDTO as Frequentation } from "./frequentation";

@Injectable()
export class FrequentationService {
    fullUpdateFrequentation(frequentationDTO: Frequentation) {
        return 'This call returns \PATCH request';
    }
    insertFrequentation(frequentationDTO: Frequentation) {
        return 'This call returns \POST request';
    }
    updateFrequentation(frequentationDTO: Frequentation) {
        return 'This call returns \PUT request';
    }
    addFrequentation(myDTO: Frequentation) {
        return myDTO;
    }
    deleteFrequentation(id: string) {
        return 'This call returns \DELETE request';
    }
    getFrequentation(id: string): string {
        return JSON.stringify({
            '_id': id
        })
    }
    getAllFrequentation(): string {
        return 'This call returns \GET_All request';
    }
}
