

let filas = 8;
let columnas = 4; 


for (let i = 0; i < filas; i++) {
    let fila = '';

    // Si la fila es impar (i % 2 !== 0), empieza con un espacio
    if (i % 2 !== 0) {
        fila += ' ';
    }

    // Completar la fila con el patrón de # y espacio
    for (let j = 0; j < columnas; j++) {
        fila += '# ';
    }

    // Imprimir la fila sin el espacio extra al final
    console.log(fila.trim());
}
