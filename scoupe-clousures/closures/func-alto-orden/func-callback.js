/*
Boton dentro de HTML
<button id=”button”>Touch me!</button>
*/

button.addEventListener("click", clickAlert);

function clickAlert() {
  alert("¡Me atrapaste!");
}

// --> Esto nos evitaría caer en un 'callback hell'
// y nos permite crear funciones más genéricas.
