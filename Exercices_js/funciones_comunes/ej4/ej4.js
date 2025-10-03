const slice = (arr, ini, end) => {

    /*
    
    El método 'slice()' devuelve un array el cual usamos 
    para copiar una parte del array original sin copiar el primer y segundo parámetro
    (el índice inicial y el índice final).

    
    */
    return arr.slice(ini, end);
}

console.log(slice([1, 2, 3, 4, 5], 1, 4));
// alert(slice([1, 2, 3, 4, 5], 1, 4));