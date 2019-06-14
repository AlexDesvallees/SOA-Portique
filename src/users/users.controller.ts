import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { UsersService } from "./users.service";
import { UserDTO as User} from "./user";
import { ApiUseTags, ApiImplicitBody, ApiBearerAuth } from '@nestjs/swagger';
// import { RolesGuard } from '../auth-role.guard';
// import { Roles } from '../roles.decorator';

// @UseGuards(RolesGuard)
// @ApiBearerAuth()
@Controller("/users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @ApiUseTags('Users')
    @Get(':userId')
    getFirstUser(@Param('userId') userid : string, @Query('limit') limit = 10) : string {
        // console.log(userid);
        // if(userid === '1'){
        //     return this.usersService.getJohn();
        // } else {
            return this.usersService.getUser(userid);
        // }
    }

    @ApiUseTags('Users')
    @Get()
    getAllUsers(){
        return this.usersService.getAllUsers();
    }

    @ApiImplicitBody({name : 'UserDTO', description: 'This is the post method', required: true, type : User} )
    @ApiUseTags('Users')
    // @Roles('admin')
    @Post()
    addUser(@Body() userDTO : User){
        return this.usersService.addUser(userDTO);
    }

    @ApiUseTags('Users')
    @Delete(':userId')
    deleteUser(@Param('userId') userId : string){
        return this.usersService.deleteUser(userId);
    }
}
