import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { PortiqueService } from "./portique.service";
import { PortiqueDTO as Portique } from "./portique.entity";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/portiques")
export class PortiqueController {
    //#region Constructor
    constructor(private readonly portiqueService: PortiqueService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Portiques')
    @Get(':id')
    getPortique(@Param('id') id : number, @Query('limit') limit = 10){
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
    
    //region put
    @ApiUseTags('Portiques')
    @Put(':id')
    updatePortiqueAdresse(@Body() portiqueDTO : Portique){
        return this.portiqueService.updatePortiqueAdresse(portiqueDTO);
    }
    //endregion

    //region put
    @ApiUseTags('Portiques')
    @Put(':id')
    updatePortiqueVille(@Body() portiqueDTO : Portique){
        return this.portiqueService.updatePortiqueVille(portiqueDTO);
    }
    //endregion

    //region put
    @ApiUseTags('Portiques')
    @Put(':id')
    updatePortiqueCodePostal(@Body() portiqueDTO : Portique){
        return this.portiqueService.updatePortiqueCodePostal(portiqueDTO);
    }
    //endregion

    //region put
    @ApiUseTags('Portiques')
    @Put(':id')
    updatePortiqueAlarme(@Body() portiqueDTO : Portique){
        return this.portiqueService.updatePortiqueAlarme(portiqueDTO);
    }
    //endregion

    //region put
    @ApiUseTags('Portiques')
    @Put(':id')
    updatePortiqueOperateur(@Body() portiqueDTO : Portique){
        return this.portiqueService.updatePortiqueOperateur(portiqueDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Portiques')
    @Delete(':id')
    deletePortique(@Param('id') id : number){
        return this.portiqueService.deletePortique(id);
    }
    //endregion
}
