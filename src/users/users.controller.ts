import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { PersonneService } from "./users.service";
import { PersonneDTO as Personne} from "./user";
import { ApiUseTags, ApiImplicitBody, ApiBearerAuth } from '@nestjs/swagger';
// import { RolesGuard } from '../auth-role.guard';
// import { Roles } from '../roles.decorator';

// @UseGuards(RolesGuard)
// @ApiBearerAuth()
@Controller("/users")
export class PersonneController {
    constructor(private readonly userService: PersonneService) {}

    @ApiUseTags('Users')
    @Get(':userId')
    getFirstUser(@Param('userId') userid : string, @Query('limit') limit = 10) : string {
        // console.log(userid);
        // if(userid === '1'){
        //     return this.usersService.getJohn();
        // } else {
            return this.userService.getUser(userid);
        // }
    }

    @ApiUseTags('Users')
    @Get()
    getAllUsers(){
        return this.userService.getAllUsers();
    }

    @ApiImplicitBody({name : 'UserDTO', description: 'This is the post method', required: true, type : Personne} )
    @ApiUseTags('Users')
    // @Roles('admin')
    @Post()
    addUser(@Body() userDTO : Personne){
        return this.userService.addUser(userDTO);
    }

    @ApiUseTags('Users')
    @Delete(':userId')
    deleteUser(@Param('userId') userId : string){
        return this.userService.deleteUser(userId);
    }
}
