import { Injectable } from '@nestjs/common';
import { ProgrammePortiqueDTO as Programme_Portique } from "./programme_portique.entity";

@Injectable()
export class Programme_PortiqueService {
    fullUpdateProgramme_Portique(programme_PortiqueDTO: Programme_Portique) {
        return 'This call returns \PATCH request';
    }
    insertProgramme_Portique(programme_PortiqueDTO: Programme_Portique) {
        return 'This call returns \POST request';
    }
    updateProgramme_Portique(programme_PortiqueDTO: Programme_Portique) {
        return 'This call returns \PUT request';
    }
    addProgramme_Portique(myDTO: Programme_Portique) {
        return myDTO;
    }
    deleteProgramme_Portique(id: string) {
        return 'This call returns \DELETE request';
    }
    getProgramme_Portique(id: string): string {
        return JSON.stringify({
            '_id': id
        })
    }
    getAllProgramme_Portique(): string {
        return 'This call returns \GET_All request';
    }
}
