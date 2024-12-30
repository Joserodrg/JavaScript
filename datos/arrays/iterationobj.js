const spiderman = {
    name: 'spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
}

// // Object.keys() -> retorna propiedades.
// let properties = Object.keys(spiderman);

// console.log(properties);
// console.log(properties.length);

// properties.forEach(property => { console.log(property) });

// // Object.Values() retorna los valores.
// let values = Object.values(spiderman);
// values.forEach(value => { console.log(value) });

let entries =  Object.entries(spiderman);
entries.forEach(entry => { console.log(entry) });