
// Crea una función recursiva llamada isEven que determine si un número entero positivo es par o impar. La función debe seguir estas reglas:
// El número 0 es par.
// El número 1 es impar.
// Para cualquier otro número N, el resultado debe ser el mismo que el de N - 2.
// La función isEven debe recibir un solo parámetro (un número entero positivo) y devolver true si el número es par y false si es impar.
// Prueba la función con los valores 50, 75 y -1. ¿Qué sucede con -1? ¿Podrías ajustar la función para que funcione también con números negativos?

function esPar(n){
let absN = Math.abs(n)

 if(absN === 0){
     return true;
  }

  if(absN === 1){
     return false;

  } /* else{ */
     return esPar(absN - 2);   
  /* } */

}

console.log(esPar(50));
console.log(esPar(75));
console.log(esPar(-1));