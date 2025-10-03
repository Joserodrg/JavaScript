const factorial = () => {
    const num = prompt("Introduce un número para calcular su factorial");
    let acc = 1; // acumulador del factorial 
    
    /*

    Bucle que recorre desde 1 hasta 'num', 
    multiplicando el acumulador por cada número hasta 'num'. 
    es decir 1*2*3*...*num
    
    */

    for (let i = 1; i <= num; i++) {
        // El acc *=i es para actualizar el acumulador
        resultado = acc *= i;
    }
    document.getElementById("num").innerHTML = resultado;
document.getElementById("input").value = resultado
}
factorial()
// console.log(factorial(5));
// alert(factorial(5));

// factorialDe5 = factorial(5)

// document.getElementById("num").textContent = factorialDe5;
// document.getElementById("input").value = factorial(5);


