// Declarar función
function obtenerDatos(callback) {
    setTimeout(function(){
      const datos = {nombre: "John", edad: 30};
      callback(datos);
      console.log("...Datos obtenidos")
    }, 3000);
  }
  
  // Ejecutar función con una callback
  obtenerDatos(function(datos) {
    console.log(datos);
  });
  
  console.log("Se están obteniendo los datos...");
