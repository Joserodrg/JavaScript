// BAD

// const map = function (arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     let res = [];
//     res.push(cb(arr[i], i));
//     return res;
//   }
// };

// console.log(
//   map([1, 2, 3, 4, 5], function (item) {
//     return item * 10;
//   })
// );

const map = function (arr, cb) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(cb(arr[i], i));
  }
  return res;
};

console.log(
  map([1, 2, 3, 4, 5], function (item) {
    return item * 10;
  })
);
