// En este archivo defino los tipos del dominio universitario y el reporte de matricula.
export interface Estudiante {
  readonly id: string;
  nombreCompleto: string;
  emailInstitucional: string;
  creditosAprobados: number;
}

export interface Asignatura {
  readonly id: string;
  codigo: string;
  nombre: string;
  creditos: number;
}

export interface MatriculaActiva {
  tipo: "ACTIVA";
  asignaturas: Asignatura[];
}

export interface MatriculaSuspendida {
  tipo: "SUSPENDIDA";
  motivoSuspension: string;
}

export interface MatriculaFinalizada {
  tipo: "FINALIZADA";
  notaMedia: number;
}

export type EstadoMatricula =
  | MatriculaActiva
  | MatriculaSuspendida
  | MatriculaFinalizada;

// Con esta función fuerzo el análisis exhaustivo en el switch.
function assertNever(value: never): never {
  throw new Error(`Estado de matricula no soportado: ${JSON.stringify(value)}`);
}

// Aquí transformo el estado de matrícula en un texto descriptivo.
export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matricula activa con ${estado.asignaturas.length} asignatura(s) en curso.`;
    case "SUSPENDIDA":
      return `Matricula suspendida. Motivo: ${estado.motivoSuspension}.`;
    case "FINALIZADA":
      return `Matricula finalizada con nota media ${estado.notaMedia}.`;
    default:
      return assertNever(estado);
  }
}
