export interface RootObject {
  Carpeta: number;
  Deudor: Deudor;
  Codeudor: Codeudor;
  Juzgado: Juzgado;
  Etapaprocesal: Etapaprocesal;
  Notificaciones: Notificaciones;
  Medidascautelares: Medidascautelares;
  Secuestros: Secuestros;
  Secuestro: Secuestro;
  Terminacion: Terminacion;
  Avaluo: Avaluo;
  Avaulo: Avaulo;
  Fecha: Fecha11;
  Causalterm: string;
  Terminosuspencion?: string;
  TerminosuspencionR?: string;
}

interface Fecha11 {
  "Rad Memorialterminacion": string;
  Autoterminacionproceso: string;
  Suspencionproceso: string;
}

interface Avaulo {
  Fecha: Fecha10;
}

interface Fecha10 {
  Adjudicacion: string;
}

interface Avaluo {
  Valoravaluo: string;
  Fecha: Fecha9;
}

interface Fecha9 {
  Remate: string;
}

interface Terminacion {
  Fecha: Fecha8;
  Valorliquidacioncredito: number | string;
  Valorcostas: number | string;
}

interface Fecha8 {
  Sentencia: string;
  Solicitudliquidacion: string;
  Presentacionliquidacion: string;
  Aprobracionliquidacion: string;
  Aprovacioncostsas: number | string;
}

interface Secuestro {
  Extra: string;
}

interface Secuestros {
  Fecha: Fecha7;
  Bienessecuestrados: string;
  Secuestro: string;
}

interface Fecha7 {
  Captura: number | string;
  Secuestro: string;
}

interface Medidascautelares {
  Fecha: Fecha6;
  Medidasolicita: string;
  Oficio: Oficio;
  Bienes: string;
  Placas: string;
  Descripmedida: string;
  Respuesta: Respuesta;
}

interface Respuesta {
  Embargo: boolean | string;
}

interface Oficio {
  Id: number | string;
  Fecha: Type;
}

interface Fecha6 {
  Ordenamedidascautelares: string;
  Retirooficios: number | string;
  Radicacion: string;
  Solicitudcaptura: string;
  Decretosecuestro: string;
}

interface Notificaciones {
  "291": _291;
  "292": _292;
  Certimail: boolean | string;
  Fisico: boolean | string;
  Fecha: Fecha5;
  Type: Type;
}

interface Type {
  "": string;
}

interface Fecha5 {
  Publicacionemplazamiento: string;
  Nombramientocurador: string;
  Autonotificado: string;
}

interface _292 {
  Fecha: Fecha4;
  Resultado: boolean | string;
}

interface Fecha4 {
  Reciboaviso: string;
  Aportanotif: string;
}

interface _291 {
  " F": F;
  Resultado: boolean | string;
  Fecha: Fecha3;
}

interface Fecha3 {
  Aportanotif: string;
}

interface F {
  Recibido: string;
}

interface Etapaprocesal {
  Etapaprocesal: string;
  Fecha: Fecha2;
}

interface Fecha2 {
  Presentaciondemanda: number | string;
  Mandamientodepago: number | string;
}

interface Juzgado {
  Fecha: Fecha;
  Obligacion: Obligacion;
  Capitaladeudado: string;
  Depto: string;
  Ciudadjuzgado: string;
  Origen: string;
  Ejecucion: string;
  Procesotype: string;
  Locationjuzgado: string;
  Radicado: string;
  Expediente: number;
}

interface Obligacion {
  "1": number | string;
  "2": number | string;
}

interface Fecha {
  Vencimientopagare: string;
  Entregagarantiasabogado: string;
}

interface Codeudor {
  Id: number | string;
  Name: string;
  Tel: Tel2;
  Direccion: string;
}

interface Tel2 {
  Fijo: number | string;
  Celular: string;
}

interface Deudor {
  Id: number;
  Name: string;
  Tel: Tel;
  Email: string;
  Direccion: string;
}

interface Tel {
  Celular: number | string;
}
