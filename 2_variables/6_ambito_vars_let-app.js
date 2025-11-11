// Ambito de las variables
//Confirmamos la buena practica de utilizar let en lgar de var

//Con esto hacemos referencia dentro y fuera del bloque, es decir la deamos alcance a la misma variable

let nombre = "Klvst3r";

if(true){
    let nombre = "Patroncito Shulo";
    console.log("Hola  desde dentro del bloque: " + nombre);
}

console.log("Hola desde fuera del bloque: " + nombre);

