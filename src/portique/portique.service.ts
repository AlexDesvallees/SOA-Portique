import { Injectable } from '@nestjs/common';
import { PortiqueDTO as Portique } from "./portique";

@Injectable()
export class PortiqueService {
    addUser(myDTO: Portique) {
        return myDTO;
    }
    deleteUser(userId: string) {
        throw new Error("Method not implemented.");
    }
    getUser(userid: string): string {
        return JSON.stringify({
            'name': 'test',
            'surname': 'world'
        });
    }
    getAllUsers(): string {
        return JSON.stringify({
            'name': 'hello',
            'surname': 'world'
        });
    }

    getJohn() {
        return JSON.stringify({
            'name': 'John',
            'surname': 'TOTO'
        });
    }
}
