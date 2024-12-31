// Ejercicio 3: Generador de Números Pares

// Descripción: Crea una función createEvenNumberGenerator que devuelva
// una función que genere el siguiente número par cada vez que se llame.

function createEvenNumberGenerator() {
  let currentEven = 0;
  return function searchEvenNumber() {
    currentEven += 2;
    return currentEven;
  };
}

let foundEvenNumbers = createEvenNumberGenerator();

console.log(foundEvenNumbers());
console.log(foundEvenNumbers());
console.log(foundEvenNumbers());
console.log(foundEvenNumbers());

