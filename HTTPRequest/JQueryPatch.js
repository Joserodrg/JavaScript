
// La pripiedad actualizar se almacena en la variable 'body' y después se utiliza como valor
// para el parametro 'data'.
const body = JSON.stringify({
    body: "My PATCH request",
  });
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/101",
    type: "PATCH",
    data: body,
// Si la solicitud fue exitosa, la función  para el success se ejecutará.
    success: function (result) {
      console.log(result);
    },
  });