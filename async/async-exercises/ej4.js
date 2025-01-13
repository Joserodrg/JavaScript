// Ejercicio 1: Saludo Asíncrono

// Crea una función saludar(nombre) que devuelva una
// promesa. Si nombre no está vacío, la promesa se resuelve
//  en 1 segundo con el mensaje "Hola, nombre". Si nombre está
// vacío, la promesa se rechaza inmediatamente con el mensaje "Nombre no proporcionado".

const greeting = (name) => {
  let promise;

  promise = new Promise((resolve, reject) => {
    if (name) {
      setTimeout(() => resolve(`Hello, ${name}`), 1000);
    } else {
      reject("Nombre no proporcionado");
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
greeting('jose');
greeting();

