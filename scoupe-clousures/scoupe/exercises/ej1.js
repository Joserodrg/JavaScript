// Ejercicio: 1

// Crea una variable global llamada `globalVar` con el valor `10`. 
// Define una función llamada `outerFunction` que declare una variable local `outerVar` 
// con el valor `20` y una función interna `innerFunction` que declare una variable local `innerVar`
//  con el valor `30`, y luego imprima en la consola los valores de `globalVar`, `outerVar` e `innerVar`. 
// Llama a `outerFunction` y luego intenta imprimir los valores de `outerVar` e `innerVar` 
// fuera de las funciones. Finalmente, modifica el ejercicio para usar `let` y `const` en lugar de `var` 
// y observa cómo cambia el alcance de las variables.

var globalVar = 10;

function otherFunction() {
    var outerVar = 20;
    function innerFunction() {
        var innerVar = 30;

    }
    console.log(`outerVar: ${outerVar}`);
    console.log(`globalVar: ${globalVar}`);
    console.log(`innerVar: ${innerVar}`);

}
otherFunction();