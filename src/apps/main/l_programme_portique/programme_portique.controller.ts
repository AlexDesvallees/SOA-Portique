import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { Programme_PortiqueService } from "./programme_portique.service";
import { ProgrammePortiqueDTO as Programme_Portique } from "./programme_portique.entity";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/Programme_Portiques")
export class Programme_PortiqueController {
    //#region Constructor
    constructor(private readonly programme_portiqueService: Programme_PortiqueService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Programme_Portiques')
    @Get(':id')
    getProgramme_Portique(@Param('id') id : number, @Query('limit') limit = 10){
            return this.programme_portiqueService.getProgramme_Portique(id);
    }

    @ApiUseTags('Programme_Portiques')
    @Get()
    getAllProgramme_Portique(){
        return this.programme_portiqueService.getAllProgramme_Portique();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Programme_Portiques')
    @Post()
    addProgramme_Portique(@Body() Programme_PortiqueDTO : Programme_Portique){
        return this.programme_portiqueService.addProgramme_Portique(Programme_PortiqueDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Programme_Portiques')
    @Patch(':id')
    updateProgramme_Portique(@Param('id') id : number, @Body() Programme_PortiqueDTO : Programme_Portique){
        return this.programme_portiqueService.updateProgramme_Portique(id, Programme_PortiqueDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Programme_Portiques')
    @Delete(':id')
    deleteProgramme_Portique(@Param('id') id : number){
        return this.programme_portiqueService.deleteProgramme_Portique(id);
    }
    //endregion
}
