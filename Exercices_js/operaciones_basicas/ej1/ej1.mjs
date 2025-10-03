

const palabra = (string) => {
  const mayus = string =  string.toUpperCase();
  const min = string =  string.toLowerCase();

 if (mayus === string) {
    return "mayusculas";
 } else if (min === string) {
    return "minusculas";
 } 
    return "mixto";
}