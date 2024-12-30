{/* <button id=”enviar”>Enviar</button>
<button id=”borrar”>Borrar</button> */}

const enviar = document.getElementById('enviar'); 
const borrar = document.getElementById('borrar');

enviar.addEventListener('click', clickAlert);
borrar.addEventListener('click', clickAlert);

function clickAlert (){
    alert (`Hiciste click en el boton ${this.id}`)
}

// Manejamos el evento de dos botones, con una sola función, esto hace nuestro código 
// reusable y más limpio. además de darnos la posibilidad de crear