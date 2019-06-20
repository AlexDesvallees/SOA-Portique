import { PortiqueDTO } from '../../main/portique/portique.entity';
import { MessagePattern } from '@nestjs/microservices';
import { PortiqueService } from './portique.service';
import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Patch } from '@nestjs/common';
import { ApiUseTags, ApiImplicitBody, ApiBearerAuth } from '@nestjs/swagger';

@Controller("/portiques")
export class PortiqueController {

    constructor(private readonly portiqueService: PortiqueService) {}

    @MessagePattern({ cmd: "GetPortique"})
    @ApiUseTags('Portique')
    @Get()
    public GetPortique(@Body() portiqueDTO : PortiqueDTO){
        return this.portiqueService.getPortiques();
    }
}