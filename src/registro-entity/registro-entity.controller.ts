import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegistroEntityService } from './registro-entity.service';
import { UpdateRegistroEntityDto } from './dto/update-registro-entity.dto';
import { RegistroEntity } from './entities/registro-entity.entity';
import { CreateRegistroDto } from './dto/create-registro-entity.dto';

@Controller('registro-entity')
export class RegistroEntityController {
  constructor(private readonly registroEntityService: RegistroEntityService) { }


  @Post()
  async create(@Body() createRegistroDto: CreateRegistroDto) {
    return this.registroEntityService.create(createRegistroDto);
  }

  @Get('ordenados')
  async findAllOrdered(): Promise<RegistroEntity[]> {
    return this.registroEntityService.findAll();
  }

  // Obtener todos los usuarios
  @Get()
  async findAll(): Promise<RegistroEntity[]> {
    return this.registroEntityService.findAll();
  }

  // Obtener un usuario por ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<RegistroEntity> {
    return this.registroEntityService.findOne(id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistroEntityDto: UpdateRegistroEntityDto) {
    return this.registroEntityService.update(+id, updateRegistroEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registroEntityService.remove(+id);
  }
}
