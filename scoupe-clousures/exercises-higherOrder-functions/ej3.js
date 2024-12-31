// Ejercicio 3: Función que Aplica Otra Función a Cada Elemento de un Array

// Enunciado: Crea una función llamada aplicarAFuncion que tome un array
// y una función, y devuelva un nuevo array donde cada elemento es el resultado
// de aplicar la función al elemento correspondiente del array original.

// Define una función simple llamada incrementar que tome un número y lo incremente en 1.
// Usa aplicarAFuncion para aplicar incrementar a cada elemento de un array de tu elección.

function increase(num) {
  return num + 1;
}

function aplicateAFuncion(arr, func) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(func(arr[i]));
  }
  return res;
}

const array = [1, 2, 3, 4, 5];

const recountIncrease = aplicateAFuncion(array, increase);

console.log(recountIncrease);
