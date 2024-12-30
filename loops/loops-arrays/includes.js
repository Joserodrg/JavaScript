// array y un valor y si esta que me de 'true' si no está que me de 'false' (no '.INCLUDE()'

function includes(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }

  return false;
}

console.log(includes([1, 2, 3, 4], 2));
