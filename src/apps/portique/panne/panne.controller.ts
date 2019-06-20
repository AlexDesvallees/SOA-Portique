import { PanneDTO as Panne } from '../../main/panne/panne.entity';
import { MessagePattern } from '@nestjs/microservices';
import { PanneService } from './panne.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags} from '@nestjs/swagger';

@Controller("/pannes")
export class PanneController {

    constructor(private readonly panneService: PanneService) {}

    @MessagePattern({ cmd: "GetPannes"})
    @ApiUseTags('Panne')
    GetPannes() : Promise<Panne[]>{
        return this.panneService.getPannes();
    }

    @MessagePattern({ cmd: "GetPanne"})
    @ApiUseTags('Panne')
    GetPanne(id: number) : Promise<Panne[]>{
        return this.panneService.getPanne(id);
    }

    @MessagePattern({ cmd: "DeletePanne"})
    @ApiUseTags('Panne')
    DeletePanne(id: number){
        return this.panneService.deletePanne(id);
    }

    @MessagePattern({ cmd: "AddPanne"})
    @ApiUseTags('Panne')
    AddPanne(panne: Panne){
        return this.panneService.addPanne(panne);
    }

    @MessagePattern({ cmd: "UpdatePanne"})
    @ApiUseTags('Panne')
    UpdatePanne({id, panne}:{id:number,panne:Panne}){
        return this.panneService.updatePanne(id, panne);
    }
}