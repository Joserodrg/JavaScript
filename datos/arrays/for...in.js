const spiderman = {
    name: 'spidey',
    universe: 42,
    powers: ['web', 'invisibility', 'spider-sense']
}

for (let property in spiderman){
    console.log(`${property}: ${spiderman[property]}`);
}