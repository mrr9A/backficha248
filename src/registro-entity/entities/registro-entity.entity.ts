import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('registros') // Nombre de la tabla en la base de datos
export class RegistroEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellidoPaterno: string;

  @Column()
  apellidoMaterno: string;

  @Column({ unique: true })
  curp: string;

  @Column()
  correo: string;

  @Column()
  estadoCivil: string;

  @Column()
  lugarNacimiento: string;

  @Column()
  radicasEn: string;

  @Column()
  localidad: string;

  @Column()
  codigoPostal: string;

  @Column()
  calleNumero: string;

  @Column()
  colonia: string;

  @Column()
  telefonoFijo: string;

  @Column()
  telefonoCelular: string;

  @Column()
  numeroSeguridadSocial: string;

  @Column()
  tipoSangre: string;

  @Column()
  nombreResponsable: string;

  @Column()
  telefonoResponsable: string;

  @Column()
  secundaria: string;

  @Column()
  claveCT: string;

  @Column()
  modalidad: string;

  @Column()
  promedioFinal: number;

  @Column()
  regimen: string;

  @Column()
  anioTermino: string;

  @Column()
  primeraOpcion: string;

  @Column()
  segundaOpcion: string;

  @Column()
  usuario: string;

  @Column()
  contrasena: string;

  @Column()
  role: string;
}