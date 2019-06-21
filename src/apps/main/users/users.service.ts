import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO as Personne } from './user.entity';
import { Procedure } from "../procedure";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    private saltRounds = 10;

    constructor(@InjectRepository(Personne) private usersRepository: Repository<Personne>) { }

    async addUser(myDTO : Personne) : Promise<Personne> {

        myDTO.passHash = await this.getHash(myDTO.pass);

        myDTO.pass = undefined;

        // Alex - Il faut maintenant demander plus d'informations pour complèter toutes les tables correctement et leurs clé étrangères
        return await this.usersRepository
        .query("INSERT INTO Personne (status_id, compte_id, nom, prenom, isBlocked, pass, username, passHash) VALUES (?,?,?,?,?,?,?,?)",
        [ myDTO.status_id, myDTO.compte_id, myDTO.nom, myDTO.prenom, myDTO.isBlocked, myDTO.pass, myDTO.username, myDTO.passHash]);
    }

    async deleteUser(userId: number) {
        return await this.usersRepository.delete(userId)
    }

    async getUser(userid : number): Promise<Personne[]> {
        return await this.usersRepository.query(Procedure.prototype.GetRequest("Lect_Personne"), [userid]);
    }
    

    async getUsers(): Promise<Personne[]> {
        return await this.usersRepository.query(Procedure.prototype.GetRequest("Lect_Liste_Personne"));
    }

    async getHash(password: string|undefined): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }

    async getUserByUsername(username: string): Promise<Personne> {
        return (await this.usersRepository.find({ username }))[0];
      }
}
