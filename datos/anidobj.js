
const spiderman = {
    name: 'spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense'],

    partner: {
        name: 'Mary Jane',
        universe: 42,
        powers: ['red hair', 'blue eyes']
    }

}

console.log(spiderman.partner.name);
console.log(spiderman['partner']['name']);

let { partner: {name} } = spiderman;
console.log(spiderman);

//let { partner } = spiderman;
//let { name } = partner;
//console.log(name);

