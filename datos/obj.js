
let ages = {alice: 18, bob: 27};

function hasPerson(name){
    return name in ages;
}

function getAges(name){
    return ages[name];
}

hasPerson("hasOwnProperty");
getAges("toString");