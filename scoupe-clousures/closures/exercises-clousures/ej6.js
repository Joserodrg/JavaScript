// Ejercicio 4: Recordatorio de Tareas

// Descripción: Crea una función createTaskReminder que acepte un nombre de tarea taskName
// y devuelva una función que, cuando se llame, devuelva un mensaje recordatorio para esa tarea.

function createTaskReminder(taskName) {
    return function recallTask() {
      console.log(`you have pending ${taskName}...`);
    };
  }
  
  let remindTask = createTaskReminder('Reunion 13:00PM');
  
remindTask();

  