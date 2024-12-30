
// Con el método '$.get' selecciona 2 parámetros, la URL del servidor y una función,
// esta función de llamada que se ejecuta si la solicitud fue exitosa.
$.get("https://jsonplaceholder.typicode.com/users", (data, status) => {
    console.log(data);
  });