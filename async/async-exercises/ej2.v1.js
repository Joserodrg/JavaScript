const test = async function (file) {
    let promise;
    if (file === "file.pdf") {
      promise = new Promise((resolve) => {
        setTimeout(() => resolve("Descarga completada!"), 3000);
      });
    } else {
      promise = new Promise((reject) => {
        setTimeout(() => reject("Error en la Descarga!"), 1500);
      });
    }
    let result = await promise;
    console.log(result);
  }
  console.log(test("file.pdf"));

  //ERROR 