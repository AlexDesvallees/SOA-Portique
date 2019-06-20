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
    getPanne(@Param('id') id : number, @Query('limit') limit = 10) {
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
    
    //region put
    @ApiUseTags('Pannes')
    @Put(':id')
    updatePannePortique(@Param('id') id : number, @Body() PanneDTO : Panne){
        return this.panneService.updatePanne(id, PanneDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Pannes')
    @Delete(':id')
    deletePanne(@Param('id') id : number){
        return this.panneService.deletePanne(id);
    }
    //endregion
}
