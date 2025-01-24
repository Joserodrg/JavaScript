const hola = () => {
  const startTime = Date.now();

  const greeting = function () {
    setTimeout(function() {
      const elapsedTime = Date.now() - startTime;

      if (elapsedTime < 5000) {
        console.log("hola");
        greeting();
      }
    }, 1000);
  };

  greeting();
};

hola();
