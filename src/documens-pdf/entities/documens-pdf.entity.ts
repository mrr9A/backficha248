import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Archivo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ruta: string;

  @Column()
  tipo: string;

  @Column()
  tamaño: number;

  @Column()
  usuarioId: number; // ID del usuario al que pertenece el documento

  @Column()
  documentoTipo: string; // CURP, Acta de nacimiento, etc.

  @Column({ default: 'pendiente' }) // Estado inicial del documento
  estado: string; // "pendiente", "aprobado", "rechazado"
}
