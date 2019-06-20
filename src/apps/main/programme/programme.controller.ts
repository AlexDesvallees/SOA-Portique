import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { ProgrammeService } from "./programme.service";
import { ProgrammeDTO as Programme } from "./programme.entity";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/Programmes")
export class ProgrammeController {
    //#region Constructor
    constructor(private readonly programmeService: ProgrammeService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Programmes')
    @Get(':id')
    getProgramme(@Param('id') id : number, @Query('limit') limit = 10) {
            return this.programmeService.getProgramme(id);
    }

    @ApiUseTags('Programmes')
    @Get()
    getAllProgramme(){
        return this.programmeService.getAllProgramme();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Programmes')
    @Post()
    addProgramme(@Body() ProgrammeDTO : Programme){
        return this.programmeService.addProgramme(ProgrammeDTO);
    }
    //#endregion

    //#region Patch
    @ApiUseTags('Programmes')
    @Put(':id')
    fullUpdateProgramme(@Param('id') id : number, @Body() ProgrammeDTO : Programme){
        return this.programmeService.fullUpdateProgramme(id, ProgrammeDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Programmes')
    @Patch(':id')
    updateProgramme(@Param('id') id : number, @Body() ProgrammeDTO : Programme){
        return this.programmeService.updateProgramme(id, ProgrammeDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Programmes')
    @Delete(':id')
    deleteProgramme(@Param('id') id : number){
        return this.programmeService.deleteProgramme(id);
    }
    //endregion
}
