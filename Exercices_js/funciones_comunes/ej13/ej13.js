const arrPares = (arr) => {

  /* 

   Metodo de array filter()  el cual necesita una función 
   para evaluar los numeros del array

  */
  return arr.filter(num => num % 2 === 0);

}
console.log(arrPares([1, 2, 3, 4, 5, 6]));
// alert(arrPares([1, 2, 3, 4, 5, 6]));