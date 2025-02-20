// let reemplace = function(text){
//     return text.reemplace(/mail/ig/'incredible');
// };

// console.log(reemplace('JavaScript es un mal lenguaje'));

// más genérico

let reemplace = function (original, remplazo) {
  return (text) => text.replace(original, remplazo);
};

const remplaceForPython = reemplace(/javascript/gi, "python");
const remplaceForGo = reemplace(/javascript/gi, "GO");

console.log(remplaceForPython("JavaScript es un buen lenguaje"));
console.log(remplaceForGo("JavaScript es un buen lenguaje"));
