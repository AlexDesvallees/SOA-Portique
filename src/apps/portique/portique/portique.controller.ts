import { PortiqueDTO as Portique } from '../../main/portique/portique.entity';
import { MessagePattern } from '@nestjs/microservices';
import { PortiqueService } from './portique.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags} from '@nestjs/swagger';

@Controller("/portiques")
export class PortiqueController {

    constructor(private readonly portiqueService: PortiqueService) {}

    @MessagePattern({ cmd: "GetPortiques"})
    @ApiUseTags('Portique')
    GetPortiques() : Promise<Portique[]>{
        return this.portiqueService.getPortiques();
    }

    @MessagePattern({ cmd: "GetPortique"})
    @ApiUseTags('Portique')
    GetPortique(id: number) : Promise<Portique[]>{
        return this.portiqueService.getPortique(id);
    }

    @MessagePattern({ cmd: "DeletePortique"})
    @ApiUseTags('Portique')
    DeletePortique(id: number){
        return this.portiqueService.deletePortique(id);
    }

    @MessagePattern({ cmd: "AddPortique"})
    @ApiUseTags('Portique')
    AddPortique(portique: Portique){
        return this.portiqueService.addPortique(portique);
    }

    @MessagePattern({ cmd: "UpdatePortique"})
    @ApiUseTags('Portique')
    UpdatePortique({id, portique}:{id:number,portique:Portique}){
        return this.portiqueService.updatePortique(id, portique);
    }
}