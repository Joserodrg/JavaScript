// las funciones de alto orden, nos dan la posibilidad de retornar funciones,
// esto es una propiedad muy poderosa ya que podemos utilizar funciones que sean templates
// de otras funciones y al hacer esto podemos utilizar la composición que hará
// nuestro código más mantenible y escalable.

function masGrandeQue(n) {
  // retorno una función con el parametro (m)
  // la cual si m es mayor que n --> true
  // m menor que n --> false.
  return (m) => m > n;
}

// después “creamos” dos funciones, utilizando
// nuestra definición de masGrandeQue, usándola como
// un template para otra función, para entender un poco más
// como funciona esto debemos conocer: lambdas y closures.
const masGrandeQue10 = masGrandeQue(10);
const masGrandeQue20 = masGrandeQue(20);

console.log(masGrandeQue10(12));
console.log(masGrandeQue20(12));
