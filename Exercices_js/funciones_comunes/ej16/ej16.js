const vocalCount = (string) => {
    const vocales = 'aeiouAEIOU';
    let count = 0;  
    for (let i = 0; i < string.length; i++) {

    /*
       En cada iteración, el condicional if verifica si el carácter actual está dentro de 
       la lista de vocales definidas. Si coincide con alguna vocal, incrementa el contador + 1.

    */
        if (vocales.includes(string[i])) {
            count++;
        }
    }
    return count;
}
console.log(vocalCount('Desarrollador Web'));
// alert(vocalCount('Desarrollador Web'));