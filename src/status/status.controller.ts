import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { StatusService } from "./status.service";
import { StatusDTO as Status } from "./Status";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/Statuss")
export class StatusController {
    //#region Constructor
    constructor(private readonly statusService: StatusService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Statuss')
    @Get(':id')
    getStatus(@Param('id') id : string, @Query('limit') limit = 10) : string {
            return this.statusService.getStatus(id);
    }

    @ApiUseTags('Statuss')
    @Get()
    getAllStatus(){
        return this.statusService.getAllStatus();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Statuss')
    @Post()
    addStatus(@Body() StatusDTO : Status){
        return this.statusService.addStatus(StatusDTO);
    }
    //#endregion

    //#region Patch
    @ApiUseTags('Statuss')
    @Patch()
    fullUpdateStatus(@Body() StatusDTO : Status){
        return this.statusService.fullUpdateStatus(StatusDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Statuss')
    @Put(':id')
    updateStatus(@Body() StatusDTO : Status){
        return this.statusService.updateStatus(StatusDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Statuss')
    @Delete(':id')
    deleteStatus(@Param('id') id : string){
        return this.statusService.deleteStatus(id);
    }
    //endregion
}
