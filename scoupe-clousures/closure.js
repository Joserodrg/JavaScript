// La función father crea una variable local
// y una funcion closure. La función closure
// solo estadisponible dentro de la función
// father. la fun clausure a diferencia de
// func father, no tiene variables locales,
// usa las declaradas dentro de func father.

// function father() {
//   var a = 1;
//   function closure() {
//     console.log(a);
//   }
//   closure();
// }
// father();

//-->
//  function init() {
//   var name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   displayName;
// }
// init();

//-->
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}
const myFunc = makeFunc();
myFunc();
