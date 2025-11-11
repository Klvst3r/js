//VAmos a definir variables

let nombre = "Klvst3r";
let apellido = "IO";
let edad = 25;


let texto = `Mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;
console.log(texto);

//Concatenar es pesado al tener mas variables, por eso las plantillas de texto son utiles

//Concatenamos las variables mas practico.

//definimos una variable texto  ALT GR + } => `

let texto2 = `Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`;
console.log(texto2);

// Con esto evitamos el operador de concatenacion +

//Vamos a definir una funcion que retorne un objeto con los datos de la persona