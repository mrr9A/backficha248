import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async login(@Body() body: { usuario: string; contrasena: string }) {
    const user = await this.loginService.validateUser(body.usuario, body.contrasena);
    return this.loginService.login(user);
  }
}
