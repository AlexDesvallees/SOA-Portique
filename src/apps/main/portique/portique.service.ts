import { Injectable } from '@nestjs/common';
import { PortiqueDTO as Portique } from "./portique.entity";
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { first, map } from "rxjs/operators";
@Injectable()
export class PortiqueService {

    @Client({ transport: Transport.TCP })
    client: ClientProxy;

    async updatePortique(id: number, portique: Portique) {
        return await this.client.send({cmd: "UpdatePortique"}, {id, portique}).pipe(
            first(),
            map(res => res as Portique[])
        ).toPromise();
    }

    async addPortique(portique: Portique) {
        return await this.client.send({cmd: "AddPortique"}, portique).pipe(
            first(),
            map(res => res as Portique[])
        ).toPromise();
    }

    async deletePortique(portiqueId: number) {
        return await this.client.send({cmd: "DeletePortique"}, portiqueId).pipe(
            first(),
            map(res => res as Portique[])
        ).toPromise();
    }

    async getPortique(portiqueId: number){
        return await this.client.send({cmd: "GetPortique"}, portiqueId).pipe(
            first(),
            map(res => res as Portique[])
        ).toPromise();
    }

    async getAllPortique(): Promise<Portique[]> {
        return await this.client.send({cmd: "GetPortiques"}, {}).pipe(
            first(),
            map(res => res as Portique[])
            ).toPromise();
    }
}