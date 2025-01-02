// Ejercicio: 4
 
// Crea una variable global llamada total con el valor 100. 
// Define una función llamada calculateTotal que declare una variable 
// local total con el valor 200 y otra función interna llamada adjustTotal 
// que declare una variable local total con el valor 300 y luego imprima los 
// valores de total en cada nivel de scope. Llama a calculateTotal y luego intenta imprimir 
// el valor de total fuera de las funciones. Modifica el ejercicio para usar let y const en lugar 
// de var y observa cómo cambia el alcance de las variables.

// var total = 100;

// function calculateTotal(){
//     var localTotal = 200;
//     function adjustTotal(){
//         var localTotal = 300;
//         console.log(localTotal);
//     }
//     adjustTotal();
//     console.log(localTotal);
// }
// console.log(total);

// calculateTotal();


let total = 100;

function calculateTotal() {
    let localTotal = 200;
    function adjustTotal() {
        const localTotal = 300;
        console.log(localTotal); 
    }
    adjustTotal();
    console.log(localTotal); 
}
console.log(total); 

calculateTotal();