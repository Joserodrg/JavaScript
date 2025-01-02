// Ejercicio: 3

//Define una variable global llamada message con el valor "Hello".
//  Crea una función llamada showMessage que declare una variable local message 
// con el valor "Hi" y luego imprima el valor de message. Crea una función interna 
// llamada innerShowMessage dentro de showMessage que declare una variable local message 
// con el valor "Hey" y luego imprima el valor de message. Llama a showMessage y observa 
// los valores impresos. Luego, intenta imprimir el valor de message 
// fuera de las funciones y observa lo que sucede.

var message = 'helloGlobal';

function showMessage() {
    function innerShowMessage() {
        var message = 'helloLocal'; 
        console.log(message); 
    };
    innerShowMessage();
}

// console.log(message); 

showMessage();