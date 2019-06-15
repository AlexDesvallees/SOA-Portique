import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user.entity';


@Injectable()
export class UserService {

    constructor(@InjectRepository(UserDTO) private usersRepository: Repository<UserDTO>) { }

    addUser(myDTO : UserDTO) {
        return myDTO;
    }
    deleteUser(userId: string) {
        throw new Error("Method not implemented.");
    }
    async getUser(userid : number): Promise<UserDTO[]> {
        return await this.usersRepository.find({
            select: ["personne_id", "status_id", "compte_id", "nom", "prenom", "isBlocked"],
            where: [{ "personne_id": userid }]
        }); 
    }
    

    async getUsers(): Promise<UserDTO[]> {
        return await this.usersRepository.find();
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
