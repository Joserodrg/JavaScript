const xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// En la variable 'body' es donde se almacena toda la información a enviar al servidor.
// La variable que contiene el objeto debe convertirse en un objeto JSON.
// Con el 'JSON.stringify()' hacemos la coneversión.
const body = JSON.stringify({
  title: "Hello World",
  body: "My POST request",
  userId: 900,
});
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 201) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
// Para asegurarse que el objeto JSON se envia al servidor lo pasamos 
// por el parametro 'send()'
xhr.send(body);