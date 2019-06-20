import { ProgrammeDTO as Programme } from '../../main/programme/programme.entity';
import { MessagePattern } from '@nestjs/microservices';
import { ProgrammeService } from './programme.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags} from '@nestjs/swagger';

@Controller("/programmes")
export class ProgrammeController {

    constructor(private readonly programmeService: ProgrammeService) {}

    @MessagePattern({ cmd: "GetProgrammes"})
    @ApiUseTags('Programme')
    GetProgrammes() : Promise<Programme[]>{
        return this.programmeService.getProgrammes();
    }

    @MessagePattern({ cmd: "GetProgramme"})
    @ApiUseTags('Programme')
    GetProgramme(id: number) : Promise<Programme[]>{
        return this.programmeService.getProgramme(id);
    }

    @MessagePattern({ cmd: "DeleteProgramme"})
    @ApiUseTags('Programme')
    DeleteProgramme(id: number){
        return this.programmeService.deleteProgramme(id);
    }

    @MessagePattern({ cmd: "AddProgramme"})
    @ApiUseTags('Programme')
    AddProgramme(programme: Programme){
        return this.programmeService.addProgramme(programme);
    }

    @MessagePattern({ cmd: "UpdateProgramme"})
    @ApiUseTags('Programme')
    UpdateProgramme({id, programme}:{id:number,programme:Programme}){
        return this.programmeService.updateProgramme(id, programme);
    }
}