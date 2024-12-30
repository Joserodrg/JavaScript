// Crear function `group` que reciba un array de números enteros y
// devuelva un objeto cuyas propiedades sean los números diferentes del array
// y como valores de cada propiedad un array con todos los valores del array recibido que coincidan con la propiedad
//
// group([2,2,3,7])
// { 2: [2,2], 3: [3], 7: [7] }
//
// group([2,3,3,5])
// { 2: [2], 3: [3,3], 5: [5] }
//
// 1. crear objeto vacío
// 2. iteraremos el array
//    3. por cada iteración, preguntaremos si el valor del elemento iterado existe como propiedad del objeto
//       4. si existe, hacemos un push con el elemento iterado
//       5. si no existe, creamos la pripuedad con un array que incluya el elemento iterado
//
// alternativa
//
// 1. crear objeto vacío
// 2. iteraremos el array
//    3. por cada iteración, preguntaremos si el valor del elemento iterado existe como propiedad del objeto
//       4. si no existe, creamos la pripuedad con un array vacío
//       5. hacemos un push con el elemento iterado

function group(arr) {
  obj = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (obj[element]) {
      obj[element].push(element);
    } else {
      obj[element] = [element];
    }
  }
  return obj;
}

console.log(group([2, 2, 3, 7]));
console.log(group([2, 3, 3, 5]));
