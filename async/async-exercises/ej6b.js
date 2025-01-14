const hola = () => {
    return new Promise((resolve) => {
      let counter = 0;
      const greeting = () => {
        if (counter < 5) {
          console.log("hola");
          counter++;
          setTimeout(greeting, 1000);
        } else {
          resolve("STOP");
        }
      };
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
  