import { ProgrammePortiqueDTO as Programme_Portique } from '../../main/l_programme_portique/programme_portique.entity';
import { MessagePattern } from '@nestjs/microservices';
import { Programme_PortiqueService } from './programme_portique.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags} from '@nestjs/swagger';

@Controller("/programme_portiques")
export class Programme_PortiqueController {

    constructor(private readonly programme_portiqueService: Programme_PortiqueService) {}

    @MessagePattern({ cmd: "GetProgramme_Portiques"})
    @ApiUseTags('Programme_Portique')
    GetProgramme_Portiques() : Promise<Programme_Portique[]>{
        return this.programme_portiqueService.getProgramme_Portiques();
    }

    @MessagePattern({ cmd: "GetProgramme_Portique"})
    @ApiUseTags('Programme_Portique')
    GetProgramme_Portique(id: number) : Promise<Programme_Portique[]>{
        return this.programme_portiqueService.getProgramme_Portique(id);
    }

    @MessagePattern({ cmd: "DeleteProgramme_Portique"})
    @ApiUseTags('Programme_Portique')
    DeleteProgramme_Portique(id: number){
        return this.programme_portiqueService.deleteProgramme_Portique(id);
    }

    @MessagePattern({ cmd: "AddProgramme_Portique"})
    @ApiUseTags('Programme_Portique')
    AddProgramme_Portique(programme_portique: Programme_Portique){
        return this.programme_portiqueService.addProgramme_Portique(programme_portique);
    }

    @MessagePattern({ cmd: "UpdateProgramme_Portique"})
    @ApiUseTags('Programme_Portique')
    UpdateProgramme_Portique({id, programme_portique}:{id:number,programme_portique:Programme_Portique}){
        return this.programme_portiqueService.updateProgramme_Portique(id, programme_portique);
    }
}