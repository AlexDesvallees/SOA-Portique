import { Injectable } from '@nestjs/common';
import { PortiqueDTO as Portique } from "./portique.entity";
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { first, map } from "rxjs/operators";
@Injectable()
export class PortiqueService {

    @Client({ transport: Transport.TCP })
    client: ClientProxy;

    fullUpdatePortique(portiqueDTO: Portique) {
        return 'This call returns \PATCH request';
    }
    insertPortique(portiqueDTO: Portique) {
        return 'This call returns \POST request';
    }
    updatePortique(portiqueDTO: Portique) {
        return 'This call returns \PUT request';
    }
    addPortique(myDTO: Portique) {
        return myDTO;
    }
    deletePortique(id: string) {
        return 'This call returns \DELETE request';
    }
    getPortique(id: string): string {
        return JSON.stringify({
            '_id': id
        })
    }
    getAllPortique(): Promise<Portique[]> {
        return this.client.send({cmd: "GetPortique"}, {}).pipe(
            first(),
            map(res=> res as Portique[])
            ).toPromise();
    }
}