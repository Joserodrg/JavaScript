
// El código eliminará un objeto con el ID --> 3.
const xhr = new XMLHttpRequest();
xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/3"); //-->ID: 3;
xhr.onload = function () {
  var data = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.log(data);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send();