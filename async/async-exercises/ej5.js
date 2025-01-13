// Ejercicio 2: Verificación de Edad

// Crea una función verificarEdad(edad) que devuelva una promesa.
//  Si edad es mayor o igual a 18, la promesa se resuelve en 1 segundo
// con el mensaje "Edad verificada". Si edad es menor a 18, la promesa se
// rechaza inmediatamente con el mensaje "Edad no permitida".

const verifyAge = (age) => {
  let promise;
  promise = new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => resolve("Edad verificada"), 1000);
    } else {
      reject("Edad no permitida");
    }
  });

  promise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
};

verifyAge(3);
verifyAge(20);
