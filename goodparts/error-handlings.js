// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.


function getLaterFirstLetter(string1, string2) {
    // console.log('error ' + string1, string2);--> Sí, empiezan por la primera letra.
    const firstLetter1 = string1.charAt(0);
    const firstLetter2 = string2.charAt(0);
    // console.log('error? ' + firstLetter1, firstLetter2); --> no esta cogiendo la primera letra, si no la segunda.
  
    if (firstLetter1 === firstLetter2) {
      // console.log('error?' + string2); //-->lejos || fallo en el return a la hora de ser correspondido con el condicional.
      return null;
    } else if (firstLetter1 > firstLetter2) {
      return string1;
    } else {
      return string2;
    }
  }
  
  // Should return "blueberry"
  console.log(
    "getLaterFirstLetter('avocado', 'blueberry') returns: " +
      getLaterFirstLetter("avocado", "blueberry")
  );
  
  // Should return "zebra"
  console.log(
    "getLaterFirstLetter('zebra', 'aardvark') returns : " +
      getLaterFirstLetter("zebra", "aardvark")
  );
  
  // Should return null
  console.log(
    "getLaterFirstLetter('astro', 'afar') returns: " +
      getLaterFirstLetter("astro", "afar")
  );
  