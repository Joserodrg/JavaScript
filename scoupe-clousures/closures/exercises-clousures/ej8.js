// Ejercicio 6: Marcador de Puntaje

// Descripción: Crea una función createScoreTracker que devuelva un objeto
// con métodos increment y getScore para llevar un registro de un puntaje.
// El puntaje debe comenzar en cero y solo puede incrementarse.

function createScoreTracker() {
  let score = 0;
  return {
    increment: function (points) {
      score += points;
    },

    getScore: function () {
      return score;
    },
  };
}

scoreTraking = createScoreTracker();

scoreTraking.increment(10);
console.log(scoreTraking.getScore());

scoreTraking.increment(5); 
console.log(scoreTraking.getScore());
