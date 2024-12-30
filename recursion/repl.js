// expressiones (expressions) vs sentencias (statements)
// toda instrucción es una sentencia
// una sentencia puede contener expresiones
//
// ej: console.log("hola");
// if (true) { console.log("true"); }
// let foo = 123;
//
// no se pueden anidad sentencias
// let let foo; // syntax error
// let if ... // syntax error
//
// una expresión se transforma en un valor
// 1+2 -> 3 // expresión (no es literal)
// 3 -> 3 // expression literal
// "hola" -> "hola" // expresión literal
//
// una expresión puede contener más expresiones anidadas
// 1 + (2 + 3)
//      -----
//       |
//       -> expresión anidada
// ----------
//  |
//  -> expresión compleja
1+2;
