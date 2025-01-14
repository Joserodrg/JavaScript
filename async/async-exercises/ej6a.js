// Ej.6: crea una funcion que muestre 'hola' por consola cada segundo
// y pare a los 5 segundos
//
// 6a. crearla con setInterval
// 6b. crearla con setTimeout

const hola = () => {
  let counter = 0;
  const greeting = setInterval(() => {
    console.log("hola");
    counter++;
    if (counter >= 5) {
      clearInterval(greeting);
      console.log("STOP");
    }
  }, 1000);
};

hola();
