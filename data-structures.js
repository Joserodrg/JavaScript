/* for (let iteration = 0; iteration < 10; iteration = iteration + 1) {
    console.log(iteration);
} */

/* let myArray1 = [10, 20, 30, 40, 50];
let myArray2 = [];

for (let i = 0; i < myArray1.length; i++) {
    myArray2.push(myArray1[i] * 10);
}

console.log(myArray2); */

let ori = [
    { name: 'Jose', age: 19 },
    { name: 'Luis', age: 15 },
    { name: 'Albert', age: 56 },
    { name: 'Pau', age: 43 }
]

let dest = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let i = 0; i < ori.length; i++) {
    let item = ori[i];
    // dest[i] = item.name;
    dest[dest.length] = item.name;
    // dest.push(item.name);
}

console.log(dest);