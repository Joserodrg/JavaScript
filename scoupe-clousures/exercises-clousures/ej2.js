// Ejercicio 2: Contador con un Paso Personalizado

// Descripción: Mejora la función createCounter para aceptar un parámetro
// step que indique en cuánto se debe incrementar el contador.

function createCounter(step) {
    let count = 0;
    return function myCounter (){
        count += step;
        return count
    }
  }
  
  const counter = createCounter(2);
  console.log(counter()); 
  console.log(counter()); 
  console.log(counter()); 