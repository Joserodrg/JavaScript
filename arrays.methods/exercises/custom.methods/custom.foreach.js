// entendiendo como funciona el método forEach de los arrays,
// vamos a hacer nuestra propia implementación usando `for` para recorrer el array
// de manera que dado un array, por ejemplo `const arr = ['a', 'b', 'c', 'd']`
// podamos usar nuestro forEach para recorrerlo en vez de usar el del propio array:
//
// En vez de:
//
// ```
// arr.forEach(function (item, index) {
//   console.log({
//     item: item,
//     index: index
//   });
// });
// ```
//
// Con nuestra implementación podremos hacer:
//
// ```
// forEach(arr, function (item, index) {
//   console.log({
//     item: item,
//     index: index
//   });
// });
// ```


// let arr = [1, 2, 3, 4, 5];

const forEach = function (arr, iter) {
  for (let i = 0; i < arr.length; i++) {
    iter(arr[i], i);
  }
};

forEach([1, 2, 3, 4, 5], function (item, index) {
    console.log({
      item: item,
      index: index,
    });
  });

  // [1, 2, 3, 4, 5 ].filter(function (item, index) {})

