// Ejercicio 10: Closures para Encapsulación.

// Define una función llamada createPerson que tome dos parámetros: name y age.
// La función debe devolver un objeto con dos métodos: getName y getAge.
// Los métodos deben devolver los valores de name y age, respectivamente, utilizando closures
// para encapsular y proteger estos datos. Crea una instancia de createPerson
// y usa los métodos para imprimir el nombre y la edad de la persona.

function createPerson(name, age) {
  return {
    getName: function () {
      return name;
    },

    getAge: function () {
      return age;
    },
  };
}

getPerson = createPerson("Alice", 41);

getPerson.getName();
console.log(getPerson.getName());
getPerson.getAge();
console.log(getPerson.getAge());
