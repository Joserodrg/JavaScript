
// Código Clásico
function learnJavaScript() {
    const persons = [
      { name: 'Niki', age: 16 },
      { name: 'Mark', age: 18 },
      { name: 'John', age: 27 },
      { name: 'Jane', age: 14 },
      { name: 'Tony', age: 24 }
    ]
  
    const fullAge = []
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].age >= 18) {
        fullAge.push(persons[i])
      }
    }
  
    return fullAge.length // número de personas mayores de 18 años
  }


//////////////////////////////////////////////////////////////////////////////////////


  // Código orden superior
  function learnJavaScript() {
    const persons = [
      { name: 'Niki', age: 34 },
      { name: 'Mark', age: 18 },
      { name: 'John', age: 27 },
      { name: 'Jane', age: 14 },
      { name: 'Tony', age: 24 }
    ]
    const fullAge = persons.filter(person => person.age >= 18) // Algoritmo con una condición en 1 línea
  
    return fullAge.length // número de personas mayores de 18 años
  }