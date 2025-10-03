const arrPromedio = (arr) => {
    let sum = 0;   
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum / arr.length; //suma dividida entre el número de elementos del array
}
console.log(arrPromedio([1, 2, 3, 4, 5]));
// alert(arrPromedio([1, 2, 3, 4, 5]));