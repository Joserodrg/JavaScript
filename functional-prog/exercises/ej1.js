// Exercise: 1

// create a compose function which accepts an array of functions
// and performs a right-to-left function composition.

const compose = function (func) {
  return function (ini) {
    return func.reduceRight((acc, func) => func(acc), ini);
  };
}

const add = (x) => x + 5;
const multiplica = (x) => x * 3;
const resta = (x) => x - 1;

const composeFunction = compose([add, multiplica, resta]);

console.log(composeFunction(2));



// const pipe = function (funcs) {
//     return function (x) {
//       let res = x; 
//       for (let i = 0; i < funcs.length; i++) { 
//         res = funcs[i](res); 
//       }
//       return res;
//     };
//   };

// const compose = function (funcs) {
//   return function (arg) {
//     let acc = arg;
//
//     for (let i = 0; i < funcs.length; i++) {
//       acc = ...
//     }
//
//     return acc;
//   };
// };

// original
// const compose = function (funcs) {
//   return function (x) {
//     let acc = x;

//     for (let i = funcs.length - 1; i >= 0; i--) {
//       acc = funcs[i](acc);
//     }
//     return acc;
//   };
// };



// const add = (x) => x + 5;
// const multiplica = (x) => x * 3;
// const resta = (x) => x - 1;

// const composeFunction = compose([add, multiplica, resta]);

// console.log(composeFunction(2));
