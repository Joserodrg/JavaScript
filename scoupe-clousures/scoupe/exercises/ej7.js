// Ejercicio 7: Alcance de Función y Hoisting

// Declara una función llamada hoistExample que contenga una variable var
// llamada hoistedVar asignada con el valor 'Hoisted Variable'.
// Dentro de la función, intenta imprimir el valor de hoistedVar
//  antes de su declaración y después de su declaración.
// Llama a la función hoistExample.

// function hoistExample() {
//   console.log(hoistedVar); // undefinded
//   var hoistedVar = "hoisted variable";
// }
// hoistExample();


function hoistExample() {
    var hoistedVar = "hoisted variable";
    console.log(hoistedVar); // 'hoisted variable'

  }
  hoistExample();