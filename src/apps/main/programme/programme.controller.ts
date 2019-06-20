import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { ProgrammeService } from "./programme.service";
import { ProgrammeDTO } from "./programme.entity";
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
    addProgramme(@Body() ProgrammeDTO : ProgrammeDTO){
        return this.programmeService.addProgramme(ProgrammeDTO);
    }
    //#endregion

    //#region Patch
    @ApiUseTags('Programmes')
    @Patch()
    fullUpdateProgramme(@Body() ProgrammeDTO : ProgrammeDTO){
        return this.programmeService.fullUpdateProgramme(ProgrammeDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Programmes')
    @Put(':id')
    updateProgrammeDate(@Body() ProgrammeDTO : ProgrammeDTO){
        return this.programmeService.updateProgrammeDate(ProgrammeDTO);
    }
    //endregion

    //region put
    @ApiUseTags('Programmes')
    @Put(':id')
    updateProgrammeNumber(@Body() ProgrammeDTO : ProgrammeDTO){
        return this.programmeService.updateProgrammeNumber(ProgrammeDTO);
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
