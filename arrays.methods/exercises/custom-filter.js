// const filter = function (arr, item, filter) {
//   for (let i = 0; i < arr.length; i++) {
//     filter(arr[i] = item);
//     return true;
//   }
// };

// filter([1, 2, 3, 4, 5], 2, funtion());

const filter = function (arr, cb) {
  let acc = [];
  for (let i = 0; i < arr.length; i++) {
    acc.push(cb(arr[i], i));
  }
  return acc;
};

console.log(filter([4, 2, 2, 4, 6, 7, 9, 2, 6], function (item) {
  return (item === 2) ? true : false;
}));
