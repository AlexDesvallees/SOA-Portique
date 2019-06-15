import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { PortiqueService } from "./portique.service";
import { PortiqueDTO as Portique } from "./portique";
import { ApiUseTags } from '@nestjs/swagger';

@Controller("/portiques")
export class UsersController {
    //#region Constructor
    constructor(private readonly portiqueService: PortiqueService) {}
    //#endregion
    
    //#region Get
    @ApiUseTags('Portiques')
    @Get(':userId')
    getUser(@Param('userId') userid : string, @Query('limit') limit = 10) : string {
            return this.portiqueService.getUser(userid);
    }

    @ApiUseTags('Portiques')
    @Get()
    getAllUsers(){
        return this.portiqueService.getAllUsers();
    }
    //#endregion

    //#region Post
    @ApiUseTags('Portiques')
    @Post()
    addUser(@Body() portiqueDTO : Portique){
        return this.portiqueService.addUser(portiqueDTO);
    }
    //#endregion

    //#region Delete
    @ApiUseTags('Portiques')
    @Delete(':userId')
    deleteUser(@Param('userId') userId : string){
        return this.portiqueService.deleteUser(userId);
    }
    //endregion
}
