import { Injectable } from '@nestjs/common';
import { UpdateRegistroEntityDto } from './dto/update-registro-entity.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RegistroEntity } from './entities/registro-entity.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { CreateRegistroDto } from './dto/create-registro-entity.dto';

@Injectable()
export class RegistroEntityService {
  constructor(
    @InjectRepository(RegistroEntity)
    private readonly registroRepository: Repository<RegistroEntity>,
  ) { }

  async create(createRegistroDto: CreateRegistroDto): Promise<RegistroEntity> {
    // Hashear la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(createRegistroDto.contrasena, 10);

    const nuevoRegistro = this.registroRepository.create({
      ...createRegistroDto,
      contrasena: hashedPassword, // Guardamos la versión encriptada
    });

    return await this.registroRepository.save(nuevoRegistro);
  }
  // Obtener todos los usuarios
  async findAll(): Promise<RegistroEntity[]> {
    return this.registroRepository.find(); // Devuelve todos los registros de la base de datos
  }
  
  async findAllFiltered(): Promise<RegistroEntity[]> {
    return this.registroRepository.find({
      order: { primeraOpcion: 'ASC' },
    });
  }

  // Obtener un usuario por ID
  async findOne(id: number): Promise<RegistroEntity | undefined> {
    return this.registroRepository.findOne({
      where: { id }, // Pasa el id como parte de las opciones de búsqueda
    });
  }

  update(id: number, updateRegistroEntityDto: UpdateRegistroEntityDto) {
    return `This action updates a #${id} registroEntity`;
  }

  remove(id: number) {
    return `This action removes a #${id} registroEntity`;
  }
}
