import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { StatusService } from "./status.service";
import { StatusDTO as Status } from "./Status";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/Status")
export class StatusController {
    //#region Constructor
    constructor(private readonly statusService: StatusService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Status')
    @Get(':id')
    getStatus(@Param('id') id : string, @Query('limit') limit = 10) : string {
            return this.statusService.getStatus(id);
    }

    @ApiUseTags('Status')
    @Get()
    getAllStatus(){
        return this.statusService.getAllStatus();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Status')
    @Post()
    addStatus(@Body() StatusDTO : Status){
        return this.statusService.addStatus(StatusDTO);
    }
    //#endregion

    //#region Patch
    @ApiUseTags('Status')
    @Patch()
    fullUpdateStatus(@Body() StatusDTO : Status){
        return this.statusService.fullUpdateStatus(StatusDTO);
    }
    //#endregion
    
    //region put
    @ApiUseTags('Status')
    @Put(':id')
    updateStatus(@Body() StatusDTO : Status){
        return this.statusService.updateStatus(StatusDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Status')
    @Delete(':id')
    deleteStatus(@Param('id') id : string){
        return this.statusService.deleteStatus(id);
    }
    //endregion
}
