import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroEntityModule } from './registro-entity/registro-entity.module';
import { RegistroEntity } from './registro-entity/entities/registro-entity.entity';
import { LoginModule } from './login/login.module';
import { DocumensPdfModule } from './documens-pdf/documens-pdf.module';
import { Archivo } from './documens-pdf/entities/documens-pdf.entity';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de base de datos
      host: 'localhost', // Host de la base de datos
      port: 3307, // Puerto de PostgreSQL
      username: 'root', // Usuario de la base de datos
      password: 'Adalis321*', // Contraseña de la base de datos
      database: 'solicitudficha', // Nombre de la base de datos
      entities: [RegistroEntity,Archivo], // Entidades de TypeORM
      synchronize: true, // Sincroniza automáticamente el esquema (solo para desarrollo)
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads', // Esto hace que los archivos sean accesibles desde /uploads
    }),
    DocumensPdfModule,
    RegistroEntityModule,
    LoginModule,
    DocumensPdfModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
