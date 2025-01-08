


// ///////////////////////////////////////////
// const compose = function (f, g, arr) {
//   return function (arr) {
//     return g(f(arr));
//   };
// };
//
// const pickItem = function (arr) {
//   let items = [];
//   for (let i = 0; i < arr.length; i++) {
//     items.push(arr[i]);
//   }
//   return items;
// };
//
// const locateIndex = function (arr) {
//   let index = [];
//   for (let i = 0; i < arr.length; i++) {
//     index.push(i);
//   }
//   return index;
// };
//
// const forEach = compose([pickItem, locateIndex]);
//
// forEach(arr, function (item, index) {
//   console.log({
//     item: item,
//     index: index,
//   });
// });
//
// console.log(forEach([1, 2, 3, 4, 5]));






// /////////////////////////////////////////
// const forEach = function (item, index) {
//   let index = [];
//   for (let i = 0; i < arr.length; i++) {
//     index.push(i);
//   }
//   let item = [];
//   for (let i = 0; i < arr.length; i++) {
//     item.push(arr[i]);
//   }
// };
//
// forEach(arr, function (item, index) {
//   console.log({
//     item: item,
//     index: index,
//   });
// });





// //////////////////////////////////////////////////
// const arr = [1, 2, 3, 4, 5];
//
// const forEach = function (arr) {
//   return {
//     item() {
//       let item = [];
//       for (let i = 0; i < arr.length; i++) {
//         item.push(arr[i]);
//       }
//     },
//
//     index() {
//       let index = [];
//       for (let i = 0; i < arr.length; i++) {
//         index.push(i);
//       }
//     },
//   };
// };
//
// forEach(arr, function (item, index) {
//   console.log({
//     item: item,
//     index: index,
//   });
// });
