import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Put } from '@nestjs/common';
import { DocumensPdfService } from './documens-pdf.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('documens-pdf')
export class DocumensPdfController {

  constructor(private readonly documensPdfService: DocumensPdfService) { }

  @Get('documentos-usuario/:usuarioId')
  async getDocumentosPorUsuario(@Param('usuarioId') usuarioId: number) {
    return this.documensPdfService.getDocumentosPorUsuario(usuarioId);
  }

    // Endpoint para cambiar el estado del documento
    @Put('cambiar-estado/:id')
    async cambiarEstado(
      @Param('id') id: number,
      @Body() body: { estado: string },
    ) {
      const { estado } = body;
      const documentoActualizado = await this.documensPdfService.cambiarEstadoDocumento(id, estado);
      return documentoActualizado;
    }

  @Post('subir')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          cb(null, `${Date.now()}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.mimetype !== 'application/pdf') {
          return cb(new Error('Solo se permiten archivos PDF'), false);
        }
        cb(null, true);
      },
    }),
  )
  subirArchivo(
    @UploadedFile() file: Express.Multer.File,
    @Body('usuarioId') usuarioId: number,
    @Body('documentoTipo') documentoTipo: string,
  ) {
    return this.documensPdfService.saveFile(file, usuarioId, documentoTipo);
  }

}
