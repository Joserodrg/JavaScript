
const range = (a, b) => a > b ? [] : [a, ...range(a+1, b)];
const multiply = arr => arr.reduce((p, a)=> p * a);

const factorial = n => multiply(range(1, n));

console.log(factorial (5));
console.log(factorial (6));
