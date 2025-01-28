

const xhr = new XMLHttpRequest();
xhr.open("PATCH", "https://jsonplaceholder.typicode.com/posts/101");
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
const body = JSON.stringify({
  body: "My PATCH request",
});
xhr.onload = () => {
  var data = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send(body);

// El código si tiene éxito, registrará la parte del objeto que se actualizó y envió al servidor.
