import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './user.entity';
import { Procedure } from "../procedure";

@Injectable()
export class UserService {

    constructor(@InjectRepository(UserDTO) private usersRepository: Repository<UserDTO>) { }

    async addUser(myDTO : UserDTO) : Promise<UserDTO> {
        // Alex - Il faut maintenant demander plus d'informations pour complèter toutes les tables correctement et leurs clé étrangères
        return await this.usersRepository.query("INSERT INTO Personne (status_id, compte_id, nom, prenom, isBlocked) VALUES (?,?,?,?,?)", [ myDTO.status_id, myDTO.compte_id, myDTO.nom, myDTO.prenom, myDTO.isBlocked]);
    }

    async updateUser(myDTO : UserDTO) : Promise<UserDTO> {
        return await this.usersRepository.query("UPDATE soa_personne.")
    }

    async deleteUser(userId: string) {
        return await this.usersRepository.delete(userId)
    }

    async getUser(userid : number): Promise<UserDTO[]> {
        return await this.usersRepository.query(Procedure.prototype.GetRequest("Lect_Personne"), [userid]);
    }
    

    async getUsers(): Promise<UserDTO[]> {
        return await this.usersRepository.query(Procedure.prototype.GetRequest("Lect_Liste_Personne"));
    }
}
