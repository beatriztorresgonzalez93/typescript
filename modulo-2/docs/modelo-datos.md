# Modelo de datos - Modulo 2

## Entidades principales

Se modelan dos entidades del dominio universitario:

- `Estudiante`: representa a un alumno con identificador inmutable (`readonly id`), datos de contacto y progreso academico.
- `Asignatura`: representa una materia con identificador inmutable (`readonly id`), codigo academico, nombre y creditos.

Se usa `interface` para estas entidades porque describen claramente la forma de objetos de dominio y son faciles de extender si el sistema crece.

## Estado de matricula con union discriminada

El estado de matricula se representa con la union discriminada `EstadoMatricula`, compuesta por:

- `MatriculaActiva` (`tipo: "ACTIVA"`): incluye un array de `asignaturas`.
- `MatriculaSuspendida` (`tipo: "SUSPENDIDA"`): incluye `motivoSuspension`.
- `MatriculaFinalizada` (`tipo: "FINALIZADA"`): incluye `notaMedia`.

La propiedad discriminante `tipo` permite que TypeScript haga estrechamiento de tipos (type narrowing) en `switch`, evitando accesos invalidos a propiedades.

## Funcion `generarReporte`

La funcion `generarReporte(estado: EstadoMatricula)` usa un `switch` sobre `estado.tipo` para devolver un mensaje descriptivo por cada caso.

Incluye una verificacion de exhaustividad con `never` en el bloque `default`, lo que ayuda a detectar en compilacion si en el futuro se agrega un nuevo estado y no se cubre en el `switch`.

## Capa de acceso a datos y genericos

En `src/services/api-client.ts` se implementa `obtenerRecurso<T>(endpoint: string): Promise<RespuestaAPI<T>>`.

- Simula latencia de red/base de datos con `setTimeout`.
- Devuelve una promesa fuertemente tipada.
- Encapsula la respuesta en `RespuestaAPI<T>`, separando metadatos (`ok`, `endpoint`, `timestamp`) del payload (`datos`).

Se usa un generico `T` para abstraer la logica de red y reutilizar la misma funcion para cualquier recurso tipado (por ejemplo, `Estudiante`, `Asignatura` u otros).
