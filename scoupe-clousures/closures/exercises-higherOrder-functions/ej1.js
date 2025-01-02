// Ejercicio 1: Aplicar Función a un Valor

// Enunciado: Crea una función de alto orden llamada aplicarFuncion que tome
// dos argumentos: una función y un valor. La función debe aplicar la función pasada
// al valor y devolver el resultado. Luego, crea una función simple llamada doble que tome un número y
// devuelva el doble de dicho número. Usa aplicarFuncion para aplicar doble a un valor de tu elección.

function funcApply(func, value) {
  return func(value);
}

function double(num) {
  return num * 2;
}

const result = funcApply(double, 5);

console.log(result);
