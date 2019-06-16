import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user.entity';


@Injectable()
export class UserService {

    constructor(@InjectRepository(UserDTO) private usersRepository: Repository<UserDTO>) { }

    async addUser(myDTO : UserDTO) {
        // Alex - Trouver dans PostMan comment envoyer un DTO
        // return await this.usersRepository.insert(myDTO);
        return await this.usersRepository.query("INSERT INTO Personne VALUES ('"+ myDTO.personne_id +"', '"+ myDTO.status_id +"', '"+ myDTO.compte_id +"', '"+ myDTO.nom +"', '"+ myDTO.prenom +"', '"+ myDTO.isBlocked +"')");
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
