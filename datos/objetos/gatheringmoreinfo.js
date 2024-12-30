
let paragraph = "born 15-15-2003 (mother Spot): White Fang";

function catRecord(name, birthdate, mother){
    return {name: name, bith: birthdate, mother: mother};
}

function addCats(set, names, birthdate, mother){
    for (let i = 0; i < names.length; i++)
        set[names[i]] = catRecord(names[i], birthdate, mother);

}

function deadCats(set, names, deathdate){
    for (let i = 0; i < names.length; i++)
        set[names[i]].death = deathdate;
}

