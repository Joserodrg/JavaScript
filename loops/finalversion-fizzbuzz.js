let fizzbuzz = ["Fizz", "Buzz", "FizzBuzz"];

for (let i = 1; i <= 100; i++) {
    let respuesta = ""; 

    if (i % 3 === 0 && i % 5 === 0) {
        respuesta = fizzbuzz[2];  
    } else if (i % 3 === 0) {
        respuesta = fizzbuzz[0];  
    } else if (i % 5 === 0) {
        respuesta = fizzbuzz[1];  
    }


    if (respuesta) {
        console.log(respuesta); 
    } else {
        console.log(i);  
    }
}
