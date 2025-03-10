import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { JwtModule } from '@nestjs/jwt';
import { RegistroEntityModule } from 'src/registro-entity/registro-entity.module';

@Module({
  controllers: [LoginController],
  imports: [
    JwtModule.register({
      secret: 'secretoSuperSeguro', // Usa variables de entorno en producción
      signOptions: { expiresIn: '1h' }
    }),
    RegistroEntityModule
  ],
  providers: [LoginService],
})
export class LoginModule { }
