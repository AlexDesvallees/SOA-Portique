import { FrequentationDTO as Frequentation } from '../../main/frequentation/frequentation.entity';
import { MessagePattern } from '@nestjs/microservices';
import { FrequentationService } from './frequentation.service';
import { Controller } from '@nestjs/common';
import { ApiUseTags} from '@nestjs/swagger';

@Controller("/frequentations")
export class FrequentationController {

    constructor(private readonly frequentationService: FrequentationService) {}

    @MessagePattern({ cmd: "GetFrequentations"})
    @ApiUseTags('Frequentation')
    GetFrequentations() : Promise<Frequentation[]>{
        return this.frequentationService.getFrequentations();
    }

    @MessagePattern({ cmd: "GetFrequentation"})
    @ApiUseTags('Frequentation')
    GetFrequentation(id: number) : Promise<Frequentation[]>{
        return this.frequentationService.getFrequentation(id);
    }

    @MessagePattern({ cmd: "DeleteFrequentation"})
    @ApiUseTags('Frequentation')
    DeleteFrequentation(id: number){
        return this.frequentationService.deleteFrequentation(id);
    }

    @MessagePattern({ cmd: "AddFrequentation"})
    @ApiUseTags('Frequentation')
    AddFrequentation(frequentation: Frequentation){
        return this.frequentationService.addFrequentation(frequentation);
    }

    @MessagePattern({ cmd: "UpdateFrequentation"})
    @ApiUseTags('Frequentation')
    UpdateFrequentation({id, frequentation}:{id:number,frequentation:Frequentation}){
        return this.frequentationService.updateFrequentation(id, frequentation);
    }
}