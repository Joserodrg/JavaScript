// Ejercicio 6: Alcance de Bloque

// Define una función llamada testScope que contenga
// un bloque if con una condición que siempre sea verdadera.
// Dentro del bloque if, declara una variable let llamada blockVar
// con el valor 'Block Scope' y luego imprime su valor.
// Intenta imprimir el valor de blockVar fuera del bloque if y observa el resultado.

function testScope() {
  if (1 === 1) {
    let blockVar = "block scope";
    console.log(blockVar);
  }
}
testScope();

// function testScope() {
//     if (1 === 1) {
//       let blockVar = "block scope";
//       console.log(blockVar);
//     }
//   }
//   testScope();