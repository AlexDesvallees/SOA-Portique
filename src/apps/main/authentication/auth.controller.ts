import { Controller, Post, HttpStatus, HttpCode, Get, Response, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../users/users.service';
import { UserDTO as User } from '../users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService) {}

  @Post('login')
  async loginUser(@Response() res: any, @Body() body: User) {
    if (!(body && body.username && body.pass)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
    }

    const user = await this.userService.getUserByUsername(body.username);
    
    if (user) {
      if (await this.userService.compareHash(body.pass, user.passHash)) {
        return res.status(HttpStatus.OK).json(await this.authService.createToken(user.personne_id, user.username));
      }
    }

    return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username or password wrong!' });
  }

  @Post('register')
  async registerUser(@Response() res: any, @Body() body: User) {
    if (!(body && body.username && body.pass)) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username and password are required!' });
    }

    let user = await this.userService.getUserByUsername(body.username);

    if (user) {
      return res.status(HttpStatus.FORBIDDEN).json({ message: 'Username exists' });
    } else {
      user = await this.userService.addUser(body);
      if (user) {
        user.passHash = undefined;
      }
    }

    return res.status(HttpStatus.OK).json(user);
  }
}