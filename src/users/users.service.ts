import { Injectable } from '@nestjs/common';
import { PersonneDTO as Personne } from "./user";

@Injectable()
export class PersonneService {
    addUser(myDTO : Personne) {
        return myDTO;
    }
    deleteUser(userId: string) {
        throw new Error("Method not implemented.");
    }
    getUser(userid : string): string {
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

    // json = {
    //     'name': "test",
    //     'surname': "test",
    //     'var': 'test'
    // }

  getJohn() {
    return JSON.stringify({
        'name': 'John',
        'surname': 'TOTO'
    });
    // return this.json;
  }
}
