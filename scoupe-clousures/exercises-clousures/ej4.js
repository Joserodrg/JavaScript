// Ejercicio 2: Contador con Límite

// Descripción: Crea una función createLimitedCounter que acepte
// un número limit y devuelva una función que incremente y devuelva un contador
// cada vez que se llame, pero que no sobrepase el límite especificado.

function createLimitedCounter(limit) {
  let count = 0;
  return function limited() {
    if (count < limit) {
      count++;
    }
    return count;
  };
  
}

let counter = createLimitedCounter(3);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());



