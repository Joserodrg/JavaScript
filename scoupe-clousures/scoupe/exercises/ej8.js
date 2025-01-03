// Ejercicio 8: let y const en Bucles

// Declara una función llamada loopScope que contenga un bucle for que itere de 0 a 2.
// Dentro del bucle, utiliza let para declarar una variable i y asignarle
// el valor del índice del bucle.Dentro del bucle, declara una
// variable const llamada loopConst con el valor 'Loop Constant'
// y luego imprime el valor de i y loopConst. Intenta imprimir el valor de i
// y loopConst fuera del bucle y observa el resultado.

// function loopScope (){
//     for (let i = 0; i < 2; i++){
//         const loopConst = 'loop constant';
//     }
//     console.log(i); //--> referenceError i is not defined
//     console.log(loopConst); //--> referenceError loopConst is not defined

// }

// loopScope();

function loopScope() {
  for (let i = 0; i < 2; i++) {
    const loopConst = "loop constant";
    console.log(i); // 0 / 1
    console.log(loopConst); // loop constant / loop constant
  }
}

loopScope();
