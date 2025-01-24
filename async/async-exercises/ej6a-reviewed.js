// Ej.6: crea una funcion que muestre 'hola' por consola cada segundo
// y pare a los 5 segundos
//
// 6a. crearla con setInterval
// 6b. crearla con setTimeout

const hola = () => {
  const greeting = setInterval(() => {
    console.log("hola");
  }, 1000);

  setTimeout(function () {
    clearInterval(greeting);
  }, 5000);
};

hola();
