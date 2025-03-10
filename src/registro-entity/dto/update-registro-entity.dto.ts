import { PartialType } from '@nestjs/mapped-types';
import { CreateRegistroDto } from './create-registro-entity.dto';

export class UpdateRegistroEntityDto extends PartialType(CreateRegistroDto) {}
