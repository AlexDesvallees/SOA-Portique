import { Injectable } from '@nestjs/common';
import { ProgrammeDTO as Programme } from "./programme";

@Injectable()
export class ProgrammeService {
    fullUpdateProgramme(programmeDTO: Programme) {
        return 'This call returns \PATCH request';
    }
    insertProgramme(programmeDTO: Programme) {
        return 'This call returns \POST request';
    }
    updateProgramme(programmeDTO: Programme) {
        return 'This call returns \PUT request';
    }
    addProgramme(myDTO: Programme) {
        return myDTO;
    }
    deleteProgramme(id: string) {
        return 'This call returns \DELETE request';
    }
    getProgramme(id: string): string {
        return JSON.stringify({
            '_id': id
        })
    }
    getAllProgramme(): string {
        return 'This call returns \GET_All request';
    }
}
