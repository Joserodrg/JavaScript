//Mantener datos privados: Puedes usar closures para
// "encapsular" datos y protegerlos del acceso directo.

function counter() {
  let account = 0;
  return function increase() {
    account++;
    console.log(account);
  };
}

let myCounter = counter();
myCounter();
myCounter();
myCounter();
myCounter();
