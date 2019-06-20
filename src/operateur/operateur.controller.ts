import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { OperateurService } from "./operateur.service";
import { OperateurDTO as Operateur } from "./operateur.entity";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/Operateurs")
export class OperateurController {
    //#region Constructor
    constructor(private readonly OperateurService: OperateurService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Operateurs')
    @Get(':id')
    getOperateur(@Param('id') id : string, @Query('limit') limit = 10) : string {
            return this.OperateurService.getOperateur(id);
    }

    @ApiUseTags('Operateurs')
    @Get()
    getAllOperateur(){
        return this.OperateurService.getAllOperateur();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Operateurs')
    @Post()
    addOperateur(@Body() OperateurDTO : Operateur){
        return this.OperateurService.addOperateur(OperateurDTO);
    }
    //#endregion

    //#region Patch
    @ApiUseTags('Operateurs')
    @Patch()
    fullUpdateOperateur(@Body() OperateurDTO : Operateur){
        return this.OperateurService.fullUpdateOperateur(OperateurDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Operateurs')
    @Put(':id')
    updateOperateur(@Body() OperateurDTO : Operateur){
        return this.OperateurService.updateOperateur(OperateurDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Operateurs')
    @Delete(':id')
    deleteOperateur(@Param('id') id : string){
        return this.OperateurService.deleteOperateur(id);
    }
    //endregion
}
