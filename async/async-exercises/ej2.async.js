const downloadFile = function (file) {
    return new Promise((resolve, reject) => {
        if (file === "file.pdf") {
            setTimeout(() => resolve("Descarga completada!"), 3000);
        } else {
            setTimeout(() => reject("Error en la Descarga!"), 1000);
        }
    });
}

const test = async function (file) {
    try {
        const result = await downloadFile(file);
        console.log('then: ' + result);
    } catch (err) {
        console.error('catch: ' + err);
    }
  };

  test("file.pdf");
  test("file2.pdf");