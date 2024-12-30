
// Como se puede ver arriba, todo lo que teníamos que hacer era especificar
// la URL con el ID del objeto a eliminar, el tipo de solicitud,
// y una función que se ejecuta si la solicitud es exitosa.

$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/3",
    type: "DELETE",
    success: function (result) {
      console.log(result)
    },
  });