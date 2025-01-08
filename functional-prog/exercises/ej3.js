const compose = function (funcs) {
  return function (arg) {
    let acc = arg;

    for (let i = 0; i < funcs.length; i++) {
      acc = funcs[funcs.length - 1 - i](acc)
      // acc = funcs[(funcs.length - 1) - i](acc)
      // acc = funcs[funcs.length - (i + 1)](acc)
    }
    return acc;
  };
};

const add = (x) => x + 5;
const multiplica = (x) => x * 3;
const resta = (x) => x - 1;

const composeFunction = compose([add, multiplica, resta]);

console.log(composeFunction(2));
