export type ProcesosBase = {
  items: string[];
  name: string;
};

export type Proceso = {
  llaveProceso: string;
  id_proceso: number;
  id_conexion?: number;
  id_deudor: number;
  telefonos: Telefonos;
  radicado: string;
  proceso_type: string;
  etapa_procesal: string;
  email: string;
  direccion: string;
  demandado: string;
  carpeta: number;
};

export type Actuacion = {
  idRegActuacion: number;
  llaveProceso: string;
  consActuacion: number;
  fechaActuacion: string;
  actuacion: string;
  anotacion?: string;
  fechaInicial?: string;
  fechaFinal?: string;
  fechaRegistro: string;
  codRegla: string;
  conDocumentos: boolean;
  cant: number;
};

export type Demandado = {
  carpeta: number;
  //? Cédula de Ciudadanía
  id_deudor: number;
  id_proceso: number;
  demandado: string;
  direccion: string;
  email: string;
  llaveProceso: string;
  telefonos?: Telefonos;
};

export type Telefonos = {
  celular?: number;
  fijo?: number;
};

export const llaves: string[] = [
  "11001400300320170088400",
  "11001400303420170083600",
  "25245408900120170023900",
  "25754418900320170075500",
  "11001400302520170090300",
  "11001400300120170100100",
  "11001400300820170113400",
  "11001400303720170139100",
  "11001400301520170139400",
  "11001400304820170097400",
  "11001400302120170153200",
  "25754400300120170032300",
  "11001400302120180023600",
  "11001400305620180022100",
  "11001418901420190065600",
  "11001418900820180078500",
  "25175408900320180060200",
  "11001418901320190070800",
  "25377408900120180037100",
  "11001400304220200053500",
  "11001400306820200102100",
];

export const prosesos: Proceso[] = [
  {
    llaveProceso: "11001400300320170088400",
    carpeta: 14,
    id_proceso: 50468620,
    id_deudor: 1077969975,
    demandado: "yesid albeiro ramos",
    telefonos: {
      celular: 3212337597,
    },
    email: "yess_id@hotmailcom",
    direccion: "carrera 77b no 68b - 19 barrio santa helenita",
    proceso_type: "prendario",
    etapa_procesal: "emplazamiento",
    radicado: "2017 - 00884",
    id_conexion: 259,
  },
  {
    llaveProceso: "11001400303420170083600",
    carpeta: 86,
    id_deudor: 1032432802,
    demandado: "luis esneider orduz farfan",
    telefonos: {
      fijo: 4712921,
    },
    id_proceso: 50521480,
    email: "orduzcrit2@hotmailcom",
    direccion: "carrera 95 # 138 - 58",
    proceso_type: "prendario",
    id_conexion: 259,
    radicado: "2017 - 00836",
    etapa_procesal: "ejecucion",
  },
  {
    llaveProceso: "11001400302520170090300",
    carpeta: 170,
    id_proceso: 112048180,
    id_conexion: 259,
    id_deudor: 52189873,
    demandado: "darnelly herndez martinez",
    telefonos: {
      fijo: 4530972,
      celular: 3144189224,
    },
    email: "darnelly-74@hotmailcom",
    direccion: "calle 74g # 80 - 58 sur",
    proceso_type: "hipotecario",
    radicado: "2017 - 00903",
    etapa_procesal: "ejecución",
  },
  {
    llaveProceso: "11001400300120170100100",
    carpeta: 178,
    id_deudor: 11185630,
    id_proceso: 50621670,
    id_conexion: 259,
    demandado: "wilson alfonso jimenez mendieta",
    telefonos: {
      fijo: 5714329,
    },
    email: "grupocomerciallasaba@hotmailcom",
    direccion: "carrera 81c # 2b - 80 piso 2",
    proceso_type: "singular",
    radicado: "2017 - 01001",
    etapa_procesal: "ejecución",
  },
  {
    llaveProceso: "11001400300820170113400",
    carpeta: 231,
    id_proceso: 50716620,
    id_conexion: 259,
    id_deudor: 79853115,
    demandado: "fanor diaz agudelo",
    telefonos: {
      fijo: 8060271,
      celular: 3212406193,
    },
    email: "fanordiaz@gmailcom",
    direccion: "diagol 56 bis 84 a 10 sur tr 1",
    proceso_type: "hipotecario",
    radicado: "2017 - 01134",
    etapa_procesal: "ejecución",
  },
  {
    llaveProceso: "11001400303720170139100",
    carpeta: 274,
    id_deudor: 35506033,
    id_proceso: 112945420,
    id_conexion: 259,
    demandado: "luz dary puerta jaramillo",
    telefonos: {
      fijo: 4357832,
      celular: 3103430010,
    },
    email: "tis-rolita@hotmail.com",
    direccion: "carrera  101  no 71 b - 53",
    proceso_type: "singular",
    radicado: "2017 - 01391",
    etapa_procesal: "ejecución",
  },
  {
    llaveProceso: "11001400301520170139400",
    carpeta: 278,
    id_deudor: 19255260,
    id_proceso: 50777890,
    id_conexion: 259,
    demandado: "matias humberto avila aguilar",
    telefonos: {
      fijo: 4170527,
      celular: 3125024008,
    },
    email: "maifren_13@yahooes",
    direccion: "calle 2 c no 62 - 20",
    proceso_type: "hipotecario",
    radicado: "2017 - 01394",
    etapa_procesal: "ejecución",
  },
  {
    llaveProceso: "11001400304820170097400",
    id_proceso: 50762570,
    id_conexion: 259,
    carpeta: 289,
    id_deudor: 1032383389,
    demandado: "anderson revelo santos",
    telefonos: {
      fijo: 4725511,
      celular: 3118526428,
    },
    email: "ars09@hotmailcom",
    direccion: "calle 64 sur  no 85 b - 40  apartamento  104",
    proceso_type: "singular",
    radicado: "2017 - 00974",
    etapa_procesal: "ejecución",
  },
  {
    llaveProceso: "11001400302120170153200",
    carpeta: 306,
    id_deudor: 79388145,
    id_proceso: 50769660,
    id_conexion: 259,
    demandado: "libardo alfonso gonzalez triviño",
    telefonos: {
      fijo: 2928108,
    },
    email: "li_bcar@hotmailcom",
    direccion: "carrera 72 a- no 9 - 44",
    proceso_type: "singular",
    radicado: "2017 - 01532",
    etapa_procesal: "ejecución",
  },

  {
    llaveProceso: "11001400302120180023600",
    carpeta: 401,
    id_deudor: 79396995,
    id_proceso: 51029180,
    id_conexion: 259,
    demandado: "arturo lince gomez",
    telefonos: {
      fijo: 4244358,
      celular: 31088445603,
    },
    email: "arthurlingo64@hotmailcom",
    direccion: "calle 12 a no 71 b - 60",
    proceso_type: "hipotecario",
    radicado: "2018 - 00236",
    etapa_procesal: "ejecución",
  },
  {
    llaveProceso: "11001400305620180022100",
    carpeta: 405,
    id_deudor: 900545720,
    id_proceso: 51042800,
    id_conexion: 259,
    demandado: "creas soluciones sas",
    telefonos: {
      fijo: 8626344,
      celular: 3107982028,
    },
    email: "andibarracosta@gmailcom",
    direccion: "carrera 50 1# 47 - 50 int 1 apto 101",
    proceso_type: "singular",
    radicado: "2018 - 00221",
    etapa_procesal: "ejecución",
  },
  {
    llaveProceso: "11001418901420190065600",
    carpeta: 461,
    id_deudor: 52883958,
    demandado: "leidy yaneth vidal rodriguez",
    telefonos: {
      fijo: 7114516,
    },
    email: "leidyyanethlyv@gmailcom",
    direccion: "diagol 2 no 21 b-20",
    id_proceso: 51816100,
    id_conexion: 259,
    proceso_type: "singular",
    radicado: "2019 - 00656",
    etapa_procesal: "contestacion demanda",
  },
  {
    llaveProceso: "11001418900820180078500",
    carpeta: 489,
    id_deudor: 51987570,
    demandado: "sandra patricia pacheco ramirez",
    telefonos: {
      fijo: 8121692,
    },
    email: "sandrabogota2007@yahoocom",
    id_proceso: 87350810,
    id_conexion: 259,
    direccion:
      "calle 163 b no 50-80  interior 10 apt 231 conjunto la estancia iii",
    proceso_type: "singular",
    radicado: "2018 - 00785",
    etapa_procesal: "embargo de remanentes juzgado 27 proceso 2019 - 00251",
  },

  {
    llaveProceso: "11001400304220200053500",
    carpeta: 529,
    id_deudor: 51813018,
    id_proceso: 128164881,
    id_conexion: 256,
    demandado: "sandra leonor paez murcia",
    telefonos: {
      fijo: 6139147,
      celular: 3134386087,
    },
    email: "yadelcis@hotmailcom",
    direccion: "kr 81 no 127 a - 46 conjunto monte azul bogota",
    proceso_type: "singular",
    radicado: "2020 - 00535",
    etapa_procesal: "ejecucion",
  },
];
