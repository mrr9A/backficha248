import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumensPdfDto } from './create-documens-pdf.dto';

export class UpdateDocumensPdfDto extends PartialType(CreateDocumensPdfDto) {}
