// Ejercicio 3: Generador de Mensajes Personalizados

// Descripción: Crea una función createGreeter que acepte un nombre name y devuelva 
// una función que, cuando se llame, devuelva un saludo personalizado usando ese nombre.

function createGreeter (name){
    return function customGreeter (){
        console.log(`Hola, ${name}`)
    }
}


const greeter = createGreeter('Juan');
greeter(); 