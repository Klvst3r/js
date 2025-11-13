/* 8. Promesas con Async/Await en JavaScript

Async/await es una sintaxis introducida en JavaScript que simplifica el manejo de promesas asincrónicas. veremos cómo utilizar async/await para escribir código más legible y fácil de mantener. 

*/

// Función que simula una operación asincrónica utilizando una promesa

//Visto el tema de Promesas, vamos a ver como podriamos simplificar esto a traves de las funciones asincronas.

//Creamos una funicona asincrona, que es cuando creamos y ejecutamos un afunicon asincrona, lo que estamos indicandole a JavaScroipt es que cualquier cosa que se ejecute dentro esta funcion se va a a ejecutar en un momento posterior, es decir similar a lo que vemos aca, que se esperaba que nuestra promesa se resuelva, para recien ejecutar un codigo.

/* Asi, cualquier cosa que ejecutemos dentro de esta funcion se ejecute en un momento posterior */

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


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(true){ //Aca siempre se resolvera la promesa
                resolve(data);
            }else{
                reject("Error: No se pudo obtener los datos");
            }
        }, 2000);
    });

}

//Creamos una funcion asincrona, hay dos formas 1. de la forma tradicional

async function fetchData() { //Especificamos que es una funcion asincrona, es decir estamos especificando que esta funcion se va a ejecutar en un moento posterior
    //definimos una variable, lo que va a quedar dentro de la variable ressponse, va a ser la promesa como tal, pero, ahora no queremos que en la variable response este almacenado la promesa, sino que queremos que se espere a que se resuelva esta promesa y quede almacenado dentro de resopnse lo que tenemos en data.

    //Asi lo que tenemos que hacer es antes de pedir que se ejecute esta llamada a fetchData, pasarle la palabra reservada await, cuando le pasamos la palabra reservada await, lo que estamos indicando a JavaScript es que espere a que se resuelva esta promesa para recien ejecutar el codigo que sigue despues de esta linea. Es decir estamos inidicando, quiero que se resuelva esta promesa y una vez resuleta esta información queda dentro de response, luego de hacer eso,
    let response = await getData(); //Llamamos a la funcion que nos devuelve una promesa
    //Ahor avamos a colocar un console log para ver que tenemos dentro de response
    console.log(response);
}


//Para verificar que efectivamente esto esta funcionando, abajo vamos a ejecutar esta funcion, la funcion asincrona fetchData


fetchData(); //Ejecutamos

/*
Debemos tener presente cuando especificamos await estamos especificando que espere a que la promesa se haya resuelto, es decir que el console.log no se va a ejecutar hasta que se resuleva la promesa, pero al ser una funcion asincrona, no dara mayor inconveniente ya que se va a ejejcutar fuera del flujo de nuestroi programa, eso quiere decir que al guiel que hace un momento cuando llegue al punto del await getData(), primero se mostraria en console.log que continua el programa y un momento posterior fuera del flujo de nuestro poragama recien, se ejecutaria la siguiente linea
console.log(response);

*/

//comprobamos en el navegador

console.log("Inicio de la obtencion de datos");


//La salida en consola es 

/* Inicio de la obtencion de datos
app.js:53 (3) [{…}, {…}, {…}]
 */

/* Nuestra en consola l ainformación anterior, pero quisa la forma de colocar nuestro codigo es mucho mas amigable a nuesra vista ya que se estaba 
que ocurre, si es que falla nuestro codigo es decir si se ejecutara el metodo reject, en vez de resolve, el metodo await solo espera que se resuelva nuestra promesa para asignarsela a response.

Pero que ocurre si se ejecuta el reject.

Se tendria que atrapar de otra manera, veamoslo en el siguiente script
*/