const test = function (file, callback, fallback) {
  if (file === 'file.pdf') {
    setTimeout(function () {
      callback(`${file}: Descarga completada!`);
    }, 2000);
  } else {
    setTimeout(function () {
      fallback(`${file}: Error en la Descarga!`);
    }, 1000);
  }
}

// ok
test(
    'file.pdf',
    function (result) {
        console.log(result);
    },
    function (err) {
        console.error(err);
    }
);

// err
test(
    'file2.pdf',
    function (result) {
        console.log(result);
    },
    function (err) {
        console.error(err);
    }
);