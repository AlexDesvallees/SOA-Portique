import { Injectable } from '@nestjs/common';
import { PanneDTO as Panne } from "./panne.entity";
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { first, map } from "rxjs/operators";
@Injectable()
export class PanneService {

    @Client({ transport: Transport.TCP, options: {
        port: Number.parseInt(process.env.microservicePort) || 3001
    } })
    client: ClientProxy;

    async updatePanne(id: number, panne: Panne) {
        return await this.client.send({cmd: "UpdatePanne"}, {id, panne}).pipe(
            first(),
            map(res => res as Panne[])
        ).toPromise();
    }

    async addPanne(panne: Panne) {
        return await this.client.send({cmd: "AddPanne"}, panne).pipe(
            first(),
            map(res => res as Panne[])
        ).toPromise();
    }

    async deletePanne(panneId: number) {
        return await this.client.send({cmd: "DeletePanne"}, panneId).pipe(
            first(),
            map(res => res as Panne[])
        ).toPromise();
    }

    async getPanne(panneId: number){
        return await this.client.send({cmd: "GetPanne"}, panneId).pipe(
            first(),
            map(res => res as Panne[])
        ).toPromise();
    }

    async getAllPanne(): Promise<Panne[]> {
        return await this.client.send({cmd: "GetPannes"}, {}).pipe(
            first(),
            map(res => res as Panne[])
            ).toPromise();
    }
}