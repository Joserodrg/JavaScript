// (COMPOSICIÓN DE FUNCIONES)--> Se utiliza para combinar funciones simples en funciones más complejas

// // Función que le suma 1 a un numero x.
// const addOne = (x) => x + 1;
// // Función que le multiplica 2 a un numero x.
// const multiplyBytwo = (x) => x * 2;
// // función de composición que toma dos funciones y retorna una nueva.
// const compose = (f, g) => (x) => f(g(x));
// // componer las funciones addOne y multiplyByTwo.
// const addOneAndMultiplyByTwo = compose(multiplyBytwo, addOne);

// implementar sin usar arrow functions

//1.
/*
function addOne(x) {
  return x + 1;
}

function multiplyByTwo(x) {
  return x * 2;
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const addOneAndMultiplyByTwo = compose(addOne, multiplyByTwo);
*/

/*
const addOneAndMultiplyByTwo = function (x) {
    return addOne(multiplyByTwo(x));
}
*/

console.log(addOneAndMultiplyByTwo(5));

// implementar usando function expressions en vez de function statements

const addOne = function (x) {
    return x + 1;
};

const multiplyByTwo = function (x) {
    return x * 2;
};

const compose = function (f, g) {
    return function (x) {
        return f(g(x));
    };
};

const pipe = function (f, g) {
    return function (x) {
        return g(f(x));
    };
};

// const addOneAndMultiplyByTwo = compose(addOne, multiplyByTwo);
const addOneAndMultiplyByTwo = pipe(multiplyByTwo, addOne);

// create a compose function which accepts an array of functions and performs a right-to-left function composition
// create a pipe function which accepts an array of functions and performs a left-to-right function composition