import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user.entity';


@Injectable()
export class UserService {

    constructor(@InjectRepository(UserDTO) private usersRepository: Repository<UserDTO>) { }

    async addUser(myDTO : UserDTO) {
        return await this.usersRepository.query("INSERT INTO Personne (status_id, compte_id, nom, prenom, isBlocked) VALUES (?,?,?,?,?)", [ myDTO.status_id, myDTO.compte_id, myDTO.nom, myDTO.prenom, myDTO.isBlocked]);
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
}
