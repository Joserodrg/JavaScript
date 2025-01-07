const nums = [1, 2, 3, 4, 5, 6];

nums.forEach(function (n) {
  console.log(n);
});

const vowelsLetters = ["a", "e", "i", "o", "u"];
vowelsLetters.forEach(function (vocal, indice, arr) {
  console.log(`El valor del elemento en la posición "${indice}" es "${vocal}" del array
    que estamos recorriendo que es ${arr}`);
});
