// Ejercicio 7: Alcance de Bloque con let y const en Funciones Anidadas

// Define una función llamada blockScopeTest que contenga un bloque if con una c
// ondición que siempre sea verdadera.
// Dentro del bloque if, usa let para declarar una variable blockVar con el valor
// 'Block Scoped' y una variable const llamada blockConst con el valor 'Constant Scoped'.
// Dentro del bloque if, define otra función llamada innerBlockScopeTest que contenga
// un bloque if con una condición que siempre sea verdadera.
// Dentro del bloque if de innerBlockScopeTest, usa let para declarar una variable
// innerBlockVar con el valor 'Inner Block Scoped' y una variable const llamada
// innerBlockConst con el valor 'Inner Constant Scoped', e imprime los
// valores de innerBlockVar y innerBlockConst.
// Llama a la función innerBlockScopeTest dentro del primer bloque if.
// Fuera de ambos bloques pero dentro de la función blockScopeTest,
// intenta imprimir los valores de blockVar y blockConst.

function blockScopeTest() {
  if (1 === 1) {
    var blockVar = "block scoped";
    const blockConst = "constant scoped";
    function innerBlockScopeTest() {
      if (true === true) {
        let innerBlockVar = "inner block scoped"; // block scope
        const innerBlockConst = " inner constant scoped"; // block scope
        console.log(innerBlockVar);
        console.log(innerBlockConst);
      }
    //   console.log(innerBlockVar); // is not defined
    }
    innerBlockScopeTest();
  }
}
blockScopeTest();
