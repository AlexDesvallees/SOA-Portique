import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { CompteService } from "./compte.service";
import { CompteDTO as Compte } from "./compte";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/Comptes")
export class CompteController {
    //#region Constructor
    constructor(private readonly compteService: CompteService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Comptes')
    @Get(':id')
    getCompte(@Param('id') id : string, @Query('limit') limit = 10) : string {
            return this.compteService.getCompte(id);
    }

    @ApiUseTags('Comptes')
    @Get()
    getAllCompte(){
        return this.compteService.getAllCompte();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Comptes')
    @Post()
    addCompte(@Body() CompteDTO : Compte){
        return this.compteService.addCompte(CompteDTO);
    }
    //#endregion

    //#region Patch
    @ApiUseTags('Comptes')
    @Patch()
    fullUpdateCompte(@Body() CompteDTO : Compte){
        return this.compteService.fullUpdateCompte(CompteDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Comptes')
    @Put(':id')
    updateCompte(@Body() CompteDTO : Compte){
        return this.compteService.updateCompte(CompteDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Comptes')
    @Delete(':id')
    deleteCompte(@Param('id') id : string){
        return this.compteService.deleteCompte(id);
    }
    //endregion
}
