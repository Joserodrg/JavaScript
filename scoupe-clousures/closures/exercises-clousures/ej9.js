// Ejercicio 9: Contador con Límites.

// Descripción: Crea una función createBoundedCounter que acepte
// dos parámetros min y max. Devuelve una función que incremente el
// contador cada vez que se llame, pero que no pueda bajar de min ni superar max.

function createBoundedCounter(min, max) {
  let count = 0;
  return {
    increase() {
      if (count < max) {
        count++;
      }
      return count;
    },

    decrease() {
      if (count > min) {
        count--;
      }
      return count;
    },
    getCounter() {
      return count;
    },
  };
}

const counter = createBoundedCounter(1, 5);

console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.getCounter());
