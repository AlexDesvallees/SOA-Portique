import { Injectable } from '@nestjs/common';
import { ProgrammePortiqueDTO as Programme_Portique } from "./programme_portique.entity";
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { first, map } from "rxjs/operators";
@Injectable()
export class Programme_PortiqueService {

    @Client({ transport: Transport.TCP, options: {
        port: Number.parseInt(process.env.microservicePort) || 3001
    } })
    client: ClientProxy;

    async updateProgramme_Portique(id: number, programme_portique: Programme_Portique) {
        return await this.client.send({cmd: "UpdateProgramme_Portique"}, {id, programme_portique}).pipe(
            first(),
            map(res => res as Programme_Portique[])
        ).toPromise();
    }

    async addProgramme_Portique(programme_portique: Programme_Portique) {
        return await this.client.send({cmd: "AddProgramme_Portique"}, programme_portique).pipe(
            first(),
            map(res => res as Programme_Portique[])
        ).toPromise();
    }

    async deleteProgramme_Portique(programme_portiqueId: number) {
        return await this.client.send({cmd: "DeleteProgramme_Portique"}, programme_portiqueId).pipe(
            first(),
            map(res => res as Programme_Portique[])
        ).toPromise();
    }

    async getProgramme_Portique(programme_portiqueId: number){
        return await this.client.send({cmd: "GetProgramme_Portique"}, programme_portiqueId).pipe(
            first(),
            map(res => res as Programme_Portique[])
        ).toPromise();
    }

    async getAllProgramme_Portique(): Promise<Programme_Portique[]> {
        return await this.client.send({cmd: "GetProgramme_Portiques"}, {}).pipe(
            first(),
            map(res => res as Programme_Portique[])
            ).toPromise();
    }
}