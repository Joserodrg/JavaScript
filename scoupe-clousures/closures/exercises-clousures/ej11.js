// Ejercicio: 11

// Desarrolla una función crearCache que devuelva una función que tome una función
// como argumento y recuerde el resultado de las llamadas previas con el mismo argumento.
// Si se llama nuevamente con un argumento previamente visto, debe devolver el resultado
// almacenado en caché en lugar de calcularlo nuevamente.

// Requisitos:

// La función crearCache debe devolver una nueva función
// que tome una función func como argumento.
// La función devuelta debe tomar un argumento arg y verificar
// si el resultado para ese arg ya está almacenado en la caché.
// Si el resultado ya está en la caché, debe devolver el resultado almacenado.
// Si el resultado no está en la caché, debe llamar a la función func
// con el argumento arg, almacenar el resultado en la caché y devolver el resultado calculado.

// function crearCache() {
//   const cache = {};
//   return function (func) {
//     return function (arg) {
//       if (cache[arg] !== undefined) {
//         return cache[arg];
//       }
//     };
//   };
// }
