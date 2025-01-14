// Ej.6: crea una funcion que muestre 'hola' por consola cada segundo
// y pare a los 5 segundos
//
// 6a. crearla con setInterval
// 6b. crearla con setTimeout

const hola = () => {
  return new Promise((resolve) => {
    let counter = 0;
    const greeting = setInterval(() => {
      console.log("hola");
      if (counter >= 5) {
        clearInterval(greeting);
        resolve("STOP");
      }
    });
    greeting();
  });
};

hola()
  .then((result) => {
    console.log(result);
  })

  .catch((error) => {
    console.log(error);
  });

  