import { Injectable } from '@nestjs/common';
import { CreateDocumensPdfDto } from './dto/create-documens-pdf.dto';
import { UpdateDocumensPdfDto } from './dto/update-documens-pdf.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Archivo } from './entities/documens-pdf.entity';
import { Repository } from 'typeorm';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

@Injectable()
export class DocumensPdfService {
  constructor(
    @InjectRepository(Archivo)
    private readonly archivoRepository: Repository<Archivo>,
  ) { }


  // Método para cambiar el estado del documento
  async cambiarEstadoDocumento(id: number, estado: string): Promise<Archivo> {
    // Cambia la llamada a findOne para que pase un objeto de opciones
    const documento = await this.archivoRepository.findOne({
      where: { id }, // Aquí usamos 'where' para buscar por el id
    });

    if (!documento) {
      throw new Error('Documento no encontrado');
    }

    documento.estado = estado; // Actualiza el estado
    return this.archivoRepository.save(documento); // Guarda los cambios en la base de datos
  }

  
  async getDocumentosPorUsuario(usuarioId: number): Promise<Archivo[]> {
    const documentos = await this.archivoRepository.find({
      where: { usuarioId },
    });

    // Supongamos que tu servidor está en localhost:3000
    const baseUrl = `http://localhost:3000/`; // Define la URL base
    return documentos.map(doc => ({
      ...doc,
      ruta: `${baseUrl}${doc.ruta}`, // Asumiendo que 'nombreArchivo' es el campo con el nombre del archivo
    }));
  }

/*   async saveFile(file: Express.Multer.File, usuarioId: number, documentoTipo: string) {
    console.log('Archivo recibido:', file);

    const nuevoArchivo = this.archivoRepository.create({
      nombre: file.originalname,
      ruta: `uploads/${file.filename}`,
      tipo: file.mimetype,
      tamaño: file.size,
      usuarioId,
      documentoTipo,
      estado: 'pendiente', // Se marca como pendiente automáticamente
    });

    await this.archivoRepository.save(nuevoArchivo);

    return {
      message: 'Archivo guardado correctamente',
      archivo: nuevoArchivo,
    };
  } */
    async saveFile(file: Express.Multer.File, usuarioId: number, documentoTipo: string) {
      console.log('Archivo recibido:', file);
    
      // Buscar si ya existe un archivo con el mismo usuarioId y documentoTipo
      let archivoExistente = await this.archivoRepository.findOne({
        where: { usuarioId, documentoTipo },
      });
    
      if (archivoExistente) {
        // Si existe, actualizar sus datos
        archivoExistente.nombre = file.originalname;
        archivoExistente.ruta = `uploads/${file.filename}`;
        archivoExistente.tipo = file.mimetype;
        archivoExistente.tamaño = file.size;
        archivoExistente.estado = 'pendiente'; // Se vuelve a marcar como pendiente
    
        await this.archivoRepository.save(archivoExistente);
    
        return {
          message: 'Archivo actualizado correctamente',
          archivo: archivoExistente,
        };
      } else {
        // Si no existe, crear un nuevo registro
        const nuevoArchivo = this.archivoRepository.create({
          nombre: file.originalname,
          ruta: `uploads/${file.filename}`,
          tipo: file.mimetype,
          tamaño: file.size,
          usuarioId,
          documentoTipo,
          estado: 'pendiente',
        });
    
        await this.archivoRepository.save(nuevoArchivo);
    
        return {
          message: 'Archivo guardado correctamente',
          archivo: nuevoArchivo,
        };
      }
    }
    
}
