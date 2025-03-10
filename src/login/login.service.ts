import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroEntity } from 'src/registro-entity/entities/registro-entity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {

  constructor(private jwtService: JwtService,
    @InjectRepository(RegistroEntity)
    private readonly registroRepository: Repository<RegistroEntity>
  ) { }

  async validateUser(usuario: string, contrasena: string): Promise<any> {
    const user = await this.registroRepository.findOne({ where: { usuario } });
    console.log('Usuario encontrado:', user); 

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    // Comparar la contraseña con la versión encriptada en la BD
    const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return { id: user.id };
  }

  async login(user: any) {
    const payload = { id: user.id };
    console.log('retorno:', user.id); 
    return {
      token: this.jwtService.sign(payload),
      usuario: user.id
    };
  }

}
