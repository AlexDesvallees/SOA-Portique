import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { PanneService } from "./panne.service";
import { PanneDTO as Panne } from "./panne.entity";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/Pannes")
export class PanneController {
    //#region Constructor
    constructor(private readonly panneService: PanneService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Pannes')
    @Get(':id')
    getPanne(@Param('id') id : string, @Query('limit') limit = 10) : string {
            return this.panneService.getPanne(id);
    }

    @ApiUseTags('Pannes')
    @Get()
    getAllPanne(){
        return this.panneService.getAllPanne();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Pannes')
    @Post()
    addPanne(@Body() PanneDTO : Panne){
        return this.panneService.addPanne(PanneDTO);
    }
    //#endregion

    //#region Patch
    @ApiUseTags('Pannes')
    @Patch()
    fullUpdatePanne(@Body() PanneDTO : Panne){
        return this.panneService.fullUpdatePanne(PanneDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Pannes')
    @Put(':id')
    updatePanne(@Body() PanneDTO : Panne){
        return this.panneService.updatePanne(PanneDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Pannes')
    @Delete(':id')
    deletePanne(@Param('id') id : string){
        return this.panneService.deletePanne(id);
    }
    //endregion
}
