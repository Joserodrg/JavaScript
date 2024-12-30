let x = stooge;
x.nickname = 'curly';
let nick = stooge.nickname; //nick es Curly porque x y stooge
                            //es referencia del mismo objeto.

                    
let a = {}, b = {}, c = {};
// a, b, c hacen referencia a diferentes objetos vacios.

a = b = c = {};
// a, b, c hacen referencia a un mismo objeto vacio.
