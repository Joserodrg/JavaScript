


const body = JSON.stringify({
    title: "Hello World",
    body: "My POST request",
    userId: 900,
  });
  $.post("https://jsonplaceholder.typicode.com/users", body, (data, status) => {
    console.log(data);
  });