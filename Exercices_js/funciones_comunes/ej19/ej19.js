const validatePassword = () => {
  pass = prompt("Introduce una contraseña:");
  /* 
    
    Regex es una expresión regular que con su sintaxis la cual es la siguiente:

    ^ Inicio de la cadena
    (?=.*[a-z]) # Al menos una letra minúscula
    (?=.*[A-Z]) # Al menos una letra mayúscula
    (?=.*\d)    # Al menos un dígito
    [a-zA-Z\d]{8,} # Solo letras y dígitos, mínimo 8 caracteres
    $ # Fin de la cadena
    
    */
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const errorTest = regex.test(pass);

  if (errorTest == true) {
    document.getElementById("error").innerText =
      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número.";
  } else {
    document.getElementById("error").innerText = "Contraseña válida.";
  }
};

validatePassword();
// console.log(validatePassword("Password123"));
// alert(validatePassword("Password123"));
