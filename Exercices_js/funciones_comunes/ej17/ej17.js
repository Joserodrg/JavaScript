const numAleatorio = (min, max) => {
    /*
    
    Math.floor para mantener un entero y después
    Math.random() genera un numero aleatorio entre 0 y 1
    suma min para ajustar el rango y que empiece desde min.
    

    */
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}   
console.log(numAleatorio(1, 100));
//alert(numAleatorio(1, 100));