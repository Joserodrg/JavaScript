// let mailArchive = {"the first email": "Querido sobrino...",
// "second email": "..."
// };


let today = new Date();
var mailArchive = {0: "Querido sobrino, ...(mail number 1)",
                   1: "(mail number 2)",
                   2: "(mail number 3)"

};

for (let current = 0; current in mailArchive;current++){
console.log("Processing email #", current, ":", mailArchive[current]);
}

// console.log("Year: ", today.getFullYear(), ", month: ",
//       today.getMonth(), ", day: ", today.getDate(), "Hour: ", today.getHours(), ", minutes: ",
//       today.getMinutes(), ", seconds: ", today.getSeconds());



