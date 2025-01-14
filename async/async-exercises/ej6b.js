const hola = () => {
  let counter = 0;
  const greeting = () => {
    if (counter < 5) {
      console.log("hola");
      counter++;
      setTimeout(greeting, 1000);
    } else {
      console.log("STOP");
    }
  };
  greeting();
};

hola();
