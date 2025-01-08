const nums = [1, 2, 3, 4, 5, 6];

nums.forEach(function (item, index) {
  console.log({ item: item, index: index });
});

return;

const vowelsLetters = ["a", "e", "i", "o", "u"];
vowelsLetters.forEach(function (vocal, indice, arr) {
  console.log(`El valor del elemento en la posición "${indice}" es "${vocal}" del array
    que estamos recorriendo que es ${arr}`);
});



const students = [
  { name: "juan", note: 3 },
  { name: "maria", note: 8 },
  { name: "jesús", note: 10 },
];

students.forEach(logItem);

function logItem(item) {
  console.log(item);
}
