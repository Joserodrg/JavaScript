// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("¡Hecho!"), 1000);
//   });

//   let result = await promise;

//   console.log(result);
// }

// f();

const test = async function (file) {
  let promise;
  if (file === "file.pdf") {
    promise = new Promise((resolve) => {
      setTimeout(() => resolve("Descarga completada!"), 3000);
    });
  } else {
    promise = new Promise((reject) => {
      setTimeout(() => reject("Error en la Descarga!"), 1000);
    });
  }

  promise.then(result =>{
    console.log(result);
  })
  .catch(error =>{
    console.log(error)
  })
}
test("file.pdf");

