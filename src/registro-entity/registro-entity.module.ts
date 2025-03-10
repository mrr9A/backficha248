import { Module } from '@nestjs/common';
import { RegistroEntityService } from './registro-entity.service';
import { RegistroEntityController } from './registro-entity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistroEntity } from './entities/registro-entity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegistroEntity])],
  controllers: [RegistroEntityController],
  providers: [RegistroEntityService],
  exports: [RegistroEntityService,TypeOrmModule], // Exportar si otros módulos lo necesitan
})
export class RegistroEntityModule {}
