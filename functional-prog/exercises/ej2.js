// Exercise: 2

// create a pipe function which accepts an array of functions
// and performs a left-to-right function composition

const pipe = function (func) {
  return function (ini) {
    return func.reduce((acc, func) => func(acc), ini);
  };
}

const add = (x) => x + 5;
const multiplica = (x) => x * 3;
const resta = (x) => x - 1;

const composeFunction = pipe([add, multiplica, resta]);

console.log(composeFunction(2)); //((2 + 5) * 3) - 1 = 20




// const pipe = function (funcs) {
//     return function (x) {
//       let res = x; 
//       for (let i = 0; i < funcs.length; i++) { 
//         res = funcs[i](res); 
//       }
//       return res;
//     };
//   };
  

//   const add = (x) => x + 5;
//   const multiplica = (x) => x * 3;
//   const resta = (x) => x - 1;
  

//   const pipeFunction = pipe([add, multiplica, resta]);
  

//   console.log(pipeFunction(2)); //((2 + 5) * 3) - 1 = 20
  