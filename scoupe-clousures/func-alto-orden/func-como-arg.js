
/*
Boton dentro de HTML
<button id=”button”>Touch me!</button>
*/

const button = document.getElementById('button');

button.addEventListener('click', function(){
    console.log('¡Me atrapaste!');
})