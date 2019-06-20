import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { FrequentationService } from "./frequentation.service";
import { FrequentationDTO as Frequentation } from "./frequentation.entity";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/Frequentations")
export class FrequentationController {
    //#region Constructor
    constructor(private readonly frequentationService: FrequentationService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Frequentations')
    @Get(':id')
    getFrequentation(@Param('id') id : number, @Query('limit') limit = 10){
            return this.frequentationService.getFrequentation(id);
    }

    @ApiUseTags('Frequentations')
    @Get()
    getAllFrequentation(){
        return this.frequentationService.getAllFrequentation();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Frequentations')
    @Post()
    addFrequentation(@Body() FrequentationDTO : Frequentation){
        return this.frequentationService.addFrequentation(FrequentationDTO);
    }
    //#endregion

    //#region Patch
    @ApiUseTags('Frequentations')
    @Put(':id')
    fullUpdateFrequentation(@Param('id') id : number, @Body() FrequentationDTO : Frequentation){
        return this.frequentationService.fullUpdateFrequentation(id, FrequentationDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Frequentations')
    @Patch(':id')
    updateFrequentation(@Param('id') id : number, @Body() FrequentationDTO : Frequentation){
        return this.frequentationService.updateFrequentation(id, FrequentationDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Frequentations')
    @Delete(':id')
    deleteFrequentation(@Param('id') id : number){
        return this.frequentationService.deleteFrequentation(id);
    }
    //endregion
}
