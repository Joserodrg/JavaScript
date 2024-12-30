
let laborables = new Array();
laborables = ['Lunes', 'Martes' , 'Miercoles', 'Jueves',
    'Viernes'];

laborables.forEach(function(valor, ind, lista){
    lista[ind] = valor.toUpperCase();
});

console.table(laborables);