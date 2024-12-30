function capAllElements(arr){
    try {
        arr.forEach((el, index, array) => {
        array[index] = el.toUpperCase(); });
      }catch (err){
        console.log(err)
      }
    }
    
    capAllElements('Incorrect argument');




    try {
        throw new TypeError("oops");

      } catch ({ name, message }) {

        console.log(name); // "TypeError"
        console.log(message); // "oops"
      }