const arrAlfabetico = () => {
    arr = prompt("Ingrese los nombres separados por comas").split(',');
    
    res = arr.sort();
    document.getElementById("p").innerHTML = res;
}   
arrAlfabetico();

// console.log(arrAlfabetico(['Jose', 'Ivan', 'Oscar', 'El cuco', 'Tia Paola', 'David Evil', 'Aaron']));
//'Jose', 'Ivan', 'Oscar', 'El cuco', 'Tia Paola', 'David Evil', 'Aaron'