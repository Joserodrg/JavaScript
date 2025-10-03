let dni = prompt('Introduce tu dni sin la letra');   
let letra = prompt('Introduce la letra de tu dni'); 

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

dni = dni % 23;  // resto de dividir el número del DNI entre 23

/*

Se comprueba si la letra introducida 
coincide con la letra que debería tener ese número

*/

if (letra.toUpperCase() == letras[dni]) {
    alert("su DNI es correcto");
} else {
    alert("su DNI es incorrecto");
}
