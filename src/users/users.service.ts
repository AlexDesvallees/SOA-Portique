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

    async deleteUser(userId: string) {
        return await this.usersRepository.delete(userId)
    }

    async getUser(userid : number): Promise<UserDTO[]> {
        return await this.usersRepository.query("SELECT * FROM Personne WHERE personne_id = " + userid);
    }
    

    async getUsers(): Promise<UserDTO[]> {
        return await this.usersRepository.query("SELECT * FROM Personne");
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
