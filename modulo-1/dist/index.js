"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Punto de entrada del proyecto.
// Aquí se prueban las funciones de math-utils con datos de ejemplo.
const math_utils_1 = require("./math-utils");
// Dataset con un valor alto para mostrar cómo funciona el filtrado.
const datos1 = [10, 12, 14, 16, 100];
// Caso borde: dataset vacío.
const datos2 = [];
// Umbral máximo permitido en valor absoluto.
const limite = 20;
console.log("Datos originales:", datos1);
console.log("Media:", (0, math_utils_1.calcularMedia)(datos1));
console.log("Mediana:", (0, math_utils_1.calcularMediana)(datos1));
console.log("Datos filtrados:", (0, math_utils_1.filtrarAtipicos)(datos1, limite));
console.log("Media con array vacío:", (0, math_utils_1.calcularMedia)(datos2));
console.log("Mediana con array vacío:", (0, math_utils_1.calcularMediana)(datos2));
