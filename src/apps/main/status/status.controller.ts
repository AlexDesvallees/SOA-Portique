import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata, Put, Patch } from '@nestjs/common';
import { StatusService } from "./status.service";
import { StatusDTO as Status } from "./status.entity";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/Status")
export class StatusController {
    //#region Constructor
    constructor(private readonly statusService: StatusService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Status')
    @Get(':id')
    getStatus(@Param('id') id : number, @Query('limit') limit = 10) {
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
    
    //region put
    @ApiUseTags('Status')
    @Put(':id')
    updateStatus(@Param('id') id : number, @Body() StatusDTO : Status){
        return this.statusService.updateStatus(id, StatusDTO);
    }
    //endregion

    //#region Delete
    @ApiUseTags('Status')
    @Delete(':id')
    deleteStatus(@Param('id') id : number){
        return this.statusService.deleteStatus(id);
    }
    //endregion
}
