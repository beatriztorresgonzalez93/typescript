// En este archivo simulo un cliente de datos con respuestas tipadas.
export interface RespuestaAPI<T> {
  ok: boolean;
  endpoint: string;
  timestamp: string;
  datos: T;
  mensaje?: string;
}

const baseDatosSimulada: Record<string, unknown> = {
  "/estudiantes/1": {
    id: "est-1",
    nombreCompleto: "Ana Torres",
    emailInstitucional: "ana.torres@universidad.edu",
    creditosAprobados: 84,
  },
  "/asignaturas/1": {
    id: "asig-1",
    codigo: "TS201",
    nombre: "Arquitectura de Software",
    creditos: 6,
  },
};

// Con esta función obtengo un recurso por endpoint y lo devuelvo con tipo estricto.
export function obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const recurso = baseDatosSimulada[endpoint];

      if (recurso === undefined) {
        reject(new Error(`No existe recurso para el endpoint: ${endpoint}`));
        return;
      }

      const respuesta: RespuestaAPI<T> = {
        ok: true,
        endpoint,
        timestamp: new Date().toISOString(),
        datos: recurso as T,
        mensaje: "Recurso recuperado correctamente",
      };

      resolve(respuesta);
    }, 400);
  });
}
