// En este archivo ejecuto una demo del módulo 2 en consola.
import type { Asignatura, Estudiante, EstadoMatricula } from "./domain/types/universidad";
import { generarReporte } from "./domain/types/universidad";
import { obtenerRecurso } from "./services/api-client";

// Aquí orquesto la lectura de recursos y la generación del reporte.
async function main(): Promise<void> {
  const estudiante = await obtenerRecurso<Estudiante>("/estudiantes/1");
  const asignatura = await obtenerRecurso<Asignatura>("/asignaturas/1");

  const estado: EstadoMatricula = {
    tipo: "ACTIVA",
    asignaturas: [asignatura.datos],
  };

  console.log("Estudiante:", estudiante.datos);
  console.log("Asignatura:", asignatura.datos);
  console.log("Reporte matricula:", generarReporte(estado));
}

main().catch((error) => {
  console.error("Error al ejecutar modulo-2:", error);
});
