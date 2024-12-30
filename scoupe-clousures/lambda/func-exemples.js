
// suma(x, y) = x + y; 
// // =
// (x ,y) = x + y;

// // De esta manera podemos tener en un lenguaje de programación funciones anónimas, 
// // siguiendo con el ejemplo anterior, sería lo mismo tener

const suma = x => y => x + y;

const suma10 = suma(10);
const suma20 = suma(20);

console.log(suma10(20));
console.log(suma20(20));

