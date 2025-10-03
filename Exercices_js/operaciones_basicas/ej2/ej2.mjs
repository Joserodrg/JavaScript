const esPlindromo = (string) => {
  let stringReves = string.split('').reverse().join('');
  return string === stringReves;

}

console.log(esPlindromo('anna')); 
console.log(esPlindromo('perro')); 
