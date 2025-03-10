import { Module } from '@nestjs/common';
import { DocumensPdfService } from './documens-pdf.service';
import { DocumensPdfController } from './documens-pdf.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archivo } from './entities/documens-pdf.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[TypeOrmModule.forFeature([Archivo]),
    MulterModule.register({
      dest: './uploads', // Carpeta donde se guardarán los archivos
    }),
  ],
  controllers: [DocumensPdfController],
  providers: [DocumensPdfService],
})
export class DocumensPdfModule {}
