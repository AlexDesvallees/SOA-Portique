import { OperateurDTO as Operateur } from '../../main/operateur/operateur.entity';
import { MessagePattern } from '@nestjs/microservices';
import { OperateurService } from './operateur.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags} from '@nestjs/swagger';

@Controller("/operateurs")
export class OperateurController {

    constructor(private readonly operateurService: OperateurService) {}

    @MessagePattern({ cmd: "GetOperateurs"})
    @ApiUseTags('Operateur')
    GetOperateurs() : Promise<Operateur[]>{
        return this.operateurService.getOperateurs();
    }

    @MessagePattern({ cmd: "GetOperateur"})
    @ApiUseTags('Operateur')
    GetOperateur(id: number) : Promise<Operateur[]>{
        return this.operateurService.getOperateur(id);
    }

    @MessagePattern({ cmd: "DeleteOperateur"})
    @ApiUseTags('Operateur')
    DeleteOperateur(id: number){
        return this.operateurService.deleteOperateur(id);
    }

    @MessagePattern({ cmd: "AddOperateur"})
    @ApiUseTags('Operateur')
    AddOperateur(operateur: Operateur){
        return this.operateurService.addOperateur(operateur);
    }

    @MessagePattern({ cmd: "UpdateOperateur"})
    @ApiUseTags('Operateur')
    UpdateOperateur({id, operateur}:{id:number,operateur:Operateur}){
        return this.operateurService.updateOperateur(id, operateur);
    }
}