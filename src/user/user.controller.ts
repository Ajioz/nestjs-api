import { Controller, Get, Post, Patch, Delete, Param, Req, Body, ParseIntPipe } from '@nestjs/common';
import {UserService} from './user.service'
import { CreateUserDTO, UpdateUserDTO } from './UserDTO';


@Controller('api/user')
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Get('/')
    getUsers(): object {
      return this.userService.getUsers();
    }

    @Get('/:userID')
    getUser(@Param('userID', ParseIntPipe) userID: number){
      return this.userService.getUser(userID);
    }

    @Post()
    createUser(@Body() userDTO: CreateUserDTO): object{
      return this.userService.createUser(userDTO);
    }

    @Patch('/:userID')
    updateUser(
      @Body() updateDTO: UpdateUserDTO,
      @Param('userID', ParseIntPipe) userID: number 
      ){
      return this.userService.updateUser(updateDTO, userID)
    }

    @Delete('/:userID')
    deleteUser(@Param('userID', ParseIntPipe) userID: number): object {
      return this.userService.deleteUser(userID);
    }
}