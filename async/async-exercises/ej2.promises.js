const test = function (file) {
    let promise;

    promise = new Promise((resolve, reject) => {
        if (file === "file.pdf") {
            setTimeout(() => resolve("Descarga completada!"), 3000);
        } else {
            setTimeout(() => reject("Error en la Descarga!"), 1000);
        }
      });
  
    promise
        .then((result) => {
            console.log('then: ' + result);
        })
        .catch((error) => {
            console.log('catch:' + error);
        });
  };

  test("file.pdf");
  test("file2.pdf");