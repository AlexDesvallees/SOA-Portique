import { Injectable } from '@nestjs/common';
import { OperateurDTO as Operateur } from "./operateur.entity";
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { first, map } from "rxjs/operators";
@Injectable()
export class OperateurService {

    @Client({ transport: Transport.TCP, options: {
        port: Number.parseInt(process.env.microservicePort) || 3001
    } })
    client: ClientProxy;

    async updateOperateur(id: number, operateur: Operateur) {
        return await this.client.send({cmd: "UpdateOperateur"}, {id, operateur}).pipe(
            first(),
            map(res => res as Operateur[])
        ).toPromise();
    }

    async addOperateur(operateur: Operateur) {
        return await this.client.send({cmd: "AddOperateur"}, operateur).pipe(
            first(),
            map(res => res as Operateur[])
        ).toPromise();
    }

    async deleteOperateur(operateurId: number) {
        return await this.client.send({cmd: "DeleteOperateur"}, operateurId).pipe(
            first(),
            map(res => res as Operateur[])
        ).toPromise();
    }

    async getOperateur(operateurId: number){
        return await this.client.send({cmd: "GetOperateur"}, operateurId).pipe(
            first(),
            map(res => res as Operateur[])
        ).toPromise();
    }

    async getAllOperateur(): Promise<Operateur[]> {
        return await this.client.send({cmd: "GetOperateurs"}, {}).pipe(
            first(),
            map(res => res as Operateur[])
            ).toPromise();
    }
}