import { Injectable } from '@nestjs/common';
import { ProgrammeDTO as Programme } from "./programme.entity";
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { first, map } from "rxjs/operators";
@Injectable()
export class ProgrammeService {

    @Client({ transport: Transport.TCP })
    client: ClientProxy;

    async updateProgramme(id: number, programme: Programme) {
        return await this.client.send({cmd: "UpdateProgramme"}, {id, programme}).pipe(
            first(),
            map(res => res as Programme[])
        ).toPromise();
    }

    async addProgramme(programme: Programme) {
        return await this.client.send({cmd: "AddProgramme"}, programme).pipe(
            first(),
            map(res => res as Programme[])
        ).toPromise();
    }

    async deleteProgramme(programmeId: number) {
        return await this.client.send({cmd: "DeleteProgramme"}, programmeId).pipe(
            first(),
            map(res => res as Programme[])
        ).toPromise();
    }

    async getProgramme(programmeId: number){
        return await this.client.send({cmd: "GetProgramme"}, programmeId).pipe(
            first(),
            map(res => res as Programme[])
        ).toPromise();
    }

    async getAllProgramme(): Promise<Programme[]> {
        return await this.client.send({cmd: "GetProgrammes"}, {}).pipe(
            first(),
            map(res => res as Programme[])
            ).toPromise();
    }
}