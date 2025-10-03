
const convertirTemperatura = (valor, unidad) => {
    if (unidad === 'C') {
        return (valor * 9/5) + 32;
    } else if (unidad === 'F') {
        return (valor - 32) * 5/9; 
    } 
}

console.log(convertirTemperatura(102, 'C'));
// alert(convertirTemperatura(100, 'C'));
console.log(convertirTemperatura(58, 'F'));
// alert(convertirTemperatura(212, 'F'));