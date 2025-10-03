
const NumeroValido = () => {
 const num = prompt("Introduce un número");

    if (isNaN(num)) {
        return "EL valor introducido no es un número";  
    } 
    return "El valor introducido es un número";
}

console.log(NumeroValido("hola"));
alert(NumeroValido('hola'));