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
    getOperateur(@Param('id') id : number, @Query('limit') limit = 10){
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
    
    //region put
    @ApiUseTags('Operateurs')
    @Patch(':id')
    updateOperateur(@Param('id') id : number, @Body() OperateurDTO : Operateur){
        return this.OperateurService.updateOperateur(id, OperateurDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Operateurs')
    @Delete(':id')
    deleteOperateur(@Param('id') id : number){
        return this.OperateurService.deleteOperateur(id);
    }
    //endregion
}
