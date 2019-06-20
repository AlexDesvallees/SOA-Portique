import { Injectable } from '@nestjs/common';
import { FrequentationDTO as Frequentation } from "./frequentation.entity";
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { first, map } from "rxjs/operators";
@Injectable()
export class FrequentationService {

    @Client({ transport: Transport.TCP, options: {
        port: Number.parseInt(process.env.microservicePort) || 3001
    } })
    client: ClientProxy;

    async updateFrequentation(id: number, frequentation: Frequentation) {
        return await this.client.send({cmd: "UpdateFrequentation"}, {id, frequentation}).pipe(
            first(),
            map(res => res as Frequentation[])
        ).toPromise();
    }

    async addFrequentation(frequentation: Frequentation) {
        return await this.client.send({cmd: "AddFrequentation"}, frequentation).pipe(
            first(),
            map(res => res as Frequentation[])
        ).toPromise();
    }

    async deleteFrequentation(frequentationId: number) {
        return await this.client.send({cmd: "DeleteFrequentation"}, frequentationId).pipe(
            first(),
            map(res => res as Frequentation[])
        ).toPromise();
    }

    async getFrequentation(frequentationId: number){
        return await this.client.send({cmd: "GetFrequentation"}, frequentationId).pipe(
            first(),
            map(res => res as Frequentation[])
        ).toPromise();
    }

    async getAllFrequentation(): Promise<Frequentation[]> {
        return await this.client.send({cmd: "GetFrequentations"}, {}).pipe(
            first(),
            map(res => res as Frequentation[])
            ).toPromise();
    }
}