// Punto de entrada del proyecto.
// Aquí se prueban las funciones de math-utils con datos de ejemplo.
import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

// Dataset con un valor alto para mostrar cómo funciona el filtrado.
const datos1: number[] = [10, 12, 14, 16, 100];
// Caso borde: dataset vacío.
const datos2: number[] = [];
// Umbral máximo permitido en valor absoluto.
const limite: number = 20;

console.log("Datos originales:", datos1);
console.log("Media:", calcularMedia(datos1));
console.log("Mediana:", calcularMediana(datos1));
console.log("Datos filtrados:", filtrarAtipicos(datos1, limite));

console.log("Media con array vacío:", calcularMedia(datos2));
console.log("Mediana con array vacío:", calcularMediana(datos2));