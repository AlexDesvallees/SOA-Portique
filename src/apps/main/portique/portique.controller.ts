import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { PortiqueService } from "./portique.service";
import { PortiqueDTO as Portique } from "./portique";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/portiques")
export class PortiqueController {
    //#region Constructor
    constructor(private readonly portiqueService: PortiqueService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Portiques')
    @Get(':id')
    getPortique(@Param('id') id : string, @Query('limit') limit = 10) : string {
            return this.portiqueService.getPortique(id);
    }

    @ApiUseTags('Portiques')
    @Get()
    getAllPortique(){
        return this.portiqueService.getAllPortique();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Portiques')
    @Post()
    addPortique(@Body() portiqueDTO : Portique){
        return this.portiqueService.addPortique(portiqueDTO);
    }
    //#endregion

    //#region Patch
    @ApiUseTags('Portiques')
    @Patch()
    fullUpdatePortique(@Body() portiqueDTO : Portique){
        return this.portiqueService.fullUpdatePortique(portiqueDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Portiques')
    @Put(':id')
    updatePortique(@Body() portiqueDTO : Portique){
        return this.portiqueService.updatePortique(portiqueDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Portiques')
    @Delete(':id')
    deletePortique(@Param('id') id : string){
        return this.portiqueService.deletePortique(id);
    }
    //endregion
}
