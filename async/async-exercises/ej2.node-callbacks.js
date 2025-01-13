const test = function (file, callback) {
    if (file === 'file.pdf') {
        setTimeout(function () {
            callback(null, `${file}: Descarga completada!`);
        }, 2000);
    } else {
        setTimeout(function () {
            callback(`${file}: Error en la Descarga!`);
        }, 1000);
    }
}
  
// ok
test(
    'file.pdf',
    function (err, result) {
        if (err) {
            console.error(err);
            return;
        }

        console.log(result);
    }
);

// err
test(
    'file2.pdf',
    function (err, result) {
        if (err) {
            console.error(err);
            return;
        }
        
        console.log(result);
    }
);