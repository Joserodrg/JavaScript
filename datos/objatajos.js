// let name = 'SpideyS';
// let universe  = 42;
// const spiderman = {
//     name,
//     universe,
//     powers: ["web", "invisibility", "spider-sense"]
// }

let names = "Spidey";
let universe  = 42;
let powers = ["web", "invisibility", "spider-sense"];

const spiderman = {names, universe, powers};

console.log(spiderman);
console.log(spiderman['names']);
console.log(spiderman.names);

let universeSpiderman = spiderman.universe
console.log(universe)
let power = spiderman['powers'][1]