function sum(arr) {
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  return arrSum;
}

console.log(sum([1, 2, 3, 4, 5]));
// alert(sum([1, 2, 3, 4, 5]));