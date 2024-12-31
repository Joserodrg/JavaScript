// Ejercicio 5: Generador de ID de Usuario

// Descripción: Crea una función createUserIdGenerator que devuelva una función que
// genere un nuevo ID de usuario incremental cada vez que se llame.

function createUserIdGenerator() {
  let userId = 0;
  return function increaseId() {
    userId++;
    return `user_${userId}`;
  };
}

generateUserId = createUserIdGenerator();

console.log(generateUserId());
console.log(generateUserId());
console.log(generateUserId());
