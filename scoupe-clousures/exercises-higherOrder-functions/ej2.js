// Ejercicio 2: Crear Función Multiplicadora

// Enunciado:Escribe una función de alto orden llamada crearMultiplicador
// que tome un número n y devuelva una nueva función. Esta nueva función debe tomar
// un número x y devolver el resultado de multiplicar x por n. Usa crearMultiplicador
// para crear una función que multiplique por 5 y úsala para multiplicar un número de tu elección.

function createMultiplier(n) {
  return function (x) {
    return x * n;
  };
}

const multiplyFor5 = createMultiplier(5);
const result = multiplyFor5(2);

console.log(result);
