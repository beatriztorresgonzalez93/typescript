"use strict";
// Utilidades matemáticas simples para trabajar con arreglos numéricos.
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = calcularMedia;
exports.calcularMediana = calcularMediana;
exports.filtrarAtipicos = filtrarAtipicos;
// Calcula el promedio de un array; devuelve null si está vacío.
function calcularMedia(array) {
    if (array.length === 0) {
        return null;
    }
    const suma = array.reduce((acumulador, valor) => acumulador + valor, 0);
    return suma / array.length;
}
// Calcula la mediana: ordena los datos y toma el centro.
// Si hay cantidad par, devuelve el promedio de los dos valores centrales.
function calcularMediana(array) {
    if (array.length === 0) {
        return null;
    }
    const ordenado = [...array].sort((a, b) => a - b);
    const mitad = Math.floor(ordenado.length / 2);
    if (ordenado.length % 2 === 0) {
        const izquierda = ordenado[mitad - 1];
        const derecha = ordenado[mitad];
        if (izquierda === undefined || derecha === undefined) {
            return null;
        }
        return (izquierda + derecha) / 2;
    }
    const valorCentral = ordenado[mitad];
    if (valorCentral === undefined) {
        return null;
    }
    return valorCentral;
}
// Filtra valores "atípicos" según un límite absoluto.
// Ejemplo: con límite 20, elimina -25 o 100.
function filtrarAtipicos(array, limite) {
    return array.filter((valor) => Math.abs(valor) <= limite);
}
