const calcularPrecio = (precioBase, iva) => {
  let precioConIva = precioBase + (precioBase * iva / 100);
  return precioConIva;
}

const playStation = 500; 
const tasaIVA = 10; 

let precioFinal = calcularPrecio(playStation, tasaIVA);

console.log(`El precio es: ${precioFinal}`);
