


// Creamos un nuevo objeto en la Variable 'xhr'
const xhr = new XMLHttpRequest();
// Especifico el tipo de solicitud en este caso 'GET'
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// Para enviar la solicitud al servidor, utilizamos el metodo 'send()'
xhr.send();
// En la mayoria de los casos se usa 'JSON', así que nos aseguramos que los datos sean devueltos 'JSON'
xhr.responseType = "json";
// En este punto hemos enviado con éxito una solicitud 'GET', ahora con el detector de eventos 'escucharemos' 
// lo que dice el servidor.
//
//El '.onload' para escuchar los eventos.
xhr.onload = () => {
// Con el if verificamos el estado de la respuesta del servidor
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

