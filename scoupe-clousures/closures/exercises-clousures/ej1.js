// Ejercicio 1: Contador Simple

// Descripción: Crea una función createCounter que devuelva una función
// que incremente y devuelva un contador cada vez que se llame.

function createCounter() {
  let count = 0;
  return function myCounter() {
    count += 1;
    return count;
  };
}

let currentCounter = createCounter();
console.log(currentCounter());
console.log(currentCounter());
console.log(currentCounter());


