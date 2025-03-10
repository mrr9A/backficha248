import { IsString, IsEmail, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateRegistroDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellidoPaterno: string;

  @IsString()
  @IsNotEmpty()
  apellidoMaterno: string;

  @IsString()
  @IsNotEmpty()
  curp: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @IsNotEmpty()
  estadoCivil: string;

  @IsString()
  @IsNotEmpty()
  lugarNacimiento: string;

  @IsString()
  @IsNotEmpty()
  radicasEn: string;

  @IsString()
  @IsNotEmpty()
  localidad: string;

  @IsString()
  @IsNotEmpty()
  codigoPostal: string;

  @IsString()
  @IsNotEmpty()
  calleNumero: string;

  @IsString()
  @IsNotEmpty()
  colonia: string;

  @IsString()
  @IsNotEmpty()
  telefonoFijo: string;

  @IsString()
  @IsNotEmpty()
  telefonoCelular: string;

  @IsString()
  @IsNotEmpty()
  numeroSeguridadSocial: string;

  @IsString()
  @IsNotEmpty()
  tipoSangre: string;

  @IsString()
  @IsNotEmpty()
  nombreResponsable: string;

  @IsString()
  @IsNotEmpty()
  telefonoResponsable: string;

  @IsString()
  @IsNotEmpty()
  secundaria: string;

  @IsString()
  @IsNotEmpty()
  claveCT: string;

  @IsString()
  @IsNotEmpty()
  modalidad: string;

  @IsNumber()
  @IsNotEmpty()
  promedioFinal: number;

  @IsString()
  @IsNotEmpty()
  regimen: string;

  @IsString()
  @IsNotEmpty()
  anioTermino: string;

  @IsString()
  @IsNotEmpty()
  primeraOpcion: string;

  @IsString()
  @IsNotEmpty()
  segundaOpcion: string;

  @IsString()
  @IsNotEmpty()
  usuario: string;

  @IsString()
  @IsNotEmpty()
  contrasena: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}