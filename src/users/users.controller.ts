import { Controller, Get, Param, Query, Post, Body, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { UserService } from "./users.service";
import { UserDTO } from "./user.entity";
import { ApiUseTags, ApiImplicitBody, ApiBearerAuth } from '@nestjs/swagger';
// import { RolesGuard } from '../auth-role.guard';
// import { Roles } from '../roles.decorator';

// @UseGuards(RolesGuard)
// @ApiBearerAuth()
@Controller("/users")
export class UserController {
    constructor(private readonly userService: UserService) {}

    @ApiUseTags('Users')
    @Get(':userId')
    getUser(@Param('userId') userid : number, @Query('limit') limit = 10){
            return this.userService.getUser(userid);
    }

    @ApiUseTags('Users')
    @Get()
    getUsers(){
        return this.userService.getUsers();
    }

    @ApiImplicitBody({name : 'UserDTO', description: 'This is the post method', required: true, type : UserDTO} )
    @ApiUseTags('Users')
    // @Roles('admin')
    @Post()
    addUser(@Body() userDTO : UserDTO){
        return this.userService.addUser(userDTO);
    }

    @ApiUseTags('Users')
    @Delete(':userId')
    deleteUser(@Param('userId') userId : number){
        return this.userService.deleteUser(userId);
    }
}
