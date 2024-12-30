
function reverseArray(array) {
    let reversedArray = []; 
  
    for (let i = array.length - 1; i >= 0; i--) {
      reversedArray.push(array[i]); 
    }
  
    return reversedArray; 
  }
  
  // Prueba de reverseArray
  let myArray = ["A", "B", "C"];
  console.log(reverseArray(myArray)); 
  console.log(myArray);  
  
function reverseArrayInPlace(array){
    for(let i = 0; i < Math.floor(array.length / 2); i++){
        let index = array.length - 1 - i;
        
    }

  }
  