// Promesas en JavaScript

// Las promesas son una forma de gestionar operaciones asincrónicas en JavaScript. Veremoscómo utilizar promesas para manejar eventos asincrónicos en Vue 3 y mejorar la experiencia del usuario.

// Crear una promesa
// const miPromesa = new Promise((resolve, reject) => {
//     const exito = true; // Cambia esto a false para probar el rechazo

//     if (exito) {
//         resolve("¡La promesa se resolvió con éxito!");
//     } else {
//         reject("La promesa fue rechazada.");
//     }
// });

// Usar la promesa
// miPromesa
//     .then((mensaje) => {
//         console.log(mensaje); // Manejar el caso de éxito
//     })
//     .catch((error) => {
//         console.error(error); // Manejar el caso de error
//     })
//     .finally(() => {
//         console.log("La promesa ha sido procesada."); // Código que se ejecuta siempre
//     });             



//Ejemplo

//Vamos a simular que vamos a hacer una consulta a una api y una vez que se hizo la consulta a esa api vamos a mostrar el resultado en la consola

//Vamos a definir una variable data

let data = [
    { 
    id: 1, 
    name: "John",
    age: 10
    },{ 
    id: 2, 
    name: "Mark",
    age: 15
    },  { 
    id: 3, 
    name: "Jane",
    age: 12
},
];

//Cuando queremos hacer una peticion a una pi lo hacemos desde una funcion, entonces creamos esa funcion

function getData() {
    return data;
}

//Definimos un avariable llamada response le vamos a asignar la ejecucion de la funicon

// como la funcion getData lo que hace es retornar la data, esntonces significa que en la variable response
//tengo almacenado la data

let response = getData();

//simplemente se imprime en crossOriginIsolated

console.log(response);

//en el najegador se inspecciona la ejecucipion

//Devuelve un array con tres objetos con tres propiedades distintas:

//(3) [{…}, {…}, {…}]0: age: 10id: 1name: "John"[[Prototype]]: Object1: age: 15id: 2name: "Mark"[[Prototype]]: Object2: age: 12id: 3name: "Jane"[[Prototype]]: Objectlength: 3[[Prototype]]: Array(0)


//Esta es la forma en la que regularmente vamos a devilver una consulta a una api, creamos una funcion, pedimos que nos retorne data y luego pedimos a esta funcion, recuperar la inforamción y mostrarlo con consola 

//Este tipo de operación es una opearcion sincronica, significa que se va a ejecutar de arriba para abajo, linea por linea, llegando al punto de la funiocn getData, lo lee, se ejecuta y lo muestra en consola.


