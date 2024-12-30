// Crea una función `countBs` que tome una cadena y devuelva cuántas veces aparece la letra "B" mayúscula en ella. 
// Luego, escribe una función `countChar` que haga lo mismo, pero para cualquier carácter especificado como segundo argumento. 
//Finalmente, ajusta `countBs` para que use `countChar` y así reutilice su lógica de conteo.

// Escribe una función llamada `countBs` que reciba una cadena como argumento y 
// devuelva un número indicando cuántas veces aparece el carácter "B" mayúscula en esa cadena. 
// Luego, crea una función más general llamada `countChar` que funcione de manera similar, pero que acepte un segundo argumento: 
// el carácter específico que quieres contar en lugar de limitarse solo a la "B" mayúscula.

// Finalmente, reescribe `countBs` para que llame a `countChar` en su interior, pasándole la "B" como carácter de búsqueda. 
// Esto simplificará el código de `countBs` al hacer uso de la lógica ya implementada en `countChar`.


function countChar(cadena, caracter) {
let counter = 0;
  
for (let i = 0; i < cadena.length; i++) {

    if (cadena[i] === caracter) {
        counter++;
      }
    }
  
    return counter;
  }


  function countBs(cadena) {

    return countChar(cadena, "B");
  }
  
  console.log(countBs("BOB")); 
  console.log(countChar("kakkerlak", "k"));















