//Pero normalemnete cuando hacemos una consulta a una api, se realiza de manera asincrona, se refeire por ejemplo que para hacer la consulta a nuestra data - a nuestra api, se va a demorar unos cuantos milisegundos y la funcion no va a deternerse esperando una respuesta, sino que de feente va a seguir con laejecucion de la siguiente linea, para conceptualizar esto, vamos a simular que esto se realiza de manera asincrona. hacemos 

// Hacemos a la fincion asincrona

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



//Para ello con la funcion de Js setTimeout, que espera que le pasemos dos parametros una funcion anonima y un tiempo en milisegundos, y lo que va a hacer es ejecutar la funcion anonima despues de que haya pasado el tiempo que le pasemos en milisegundos.


//Como esto se va a ejecutar de manera asincrona, si nosotros intentamos capturar el valor de retorno de la funcion getData, no vamos a obtener la data, sino que vamos a obtener un undefined, porque la funcion getData ya habra terminado su ejecucion antes de que se ejecute el setTimeout.


//Si hacemos
// function getData() {
//     setTimeout( function() {
//         return data;
//     }, 2000);
// }

//let response = getData();


//No se va a realizar en el momento que lo ejecutemos, es decir no devolvera la data de inmediato, hasta despues de 2 segundos

//console.log(response);

//La saluda de ejecución sera: undefined

//esto es por que estamos pasando un console.log response, como esto se ejecuta con dos segundos despues, la funcion getData ya habra terminado su ejecucion y no habra devuelto nada, por lo tanto response sera undefined.

//Para solucionar esto, tenemos las promesas en JavaScript, que nos permiten manejar operaciones asincronas de una manera mas sencilla y legible.

//Una promesa es un objeto que representa la eventual finalizacion o fracaso de una operacion asincrona y su valor resultante.

//Para crear una promesa, utilizamos el constructor Promise, que recibe una funcion con dos parametros: resolve y reject. Resolve se llama cuando la operacion asincrona se completa exitosamente, y reject se llama cuando ocurre un error.

//Cuando trabajemos con funciones asincronas, debemos trabajar con algo que se llaman promesas, las promesas van a esperar hasta que termina un determinado proceso para que recien ejecutar una acción, entonces.

//En vez de pedir que retorna la data despues de que se ejecute el timeetout, lo que vamos a hacer es pedir que retorne un apromesa y como ejecuto un apromesa:

//Se hace con,
//return new Promise( function(resolve, reject) { ... } )

//Ej

// function getData() {
//     return new Promise( function(resolve, reject) {
//         setTimeout( function() {
//             return data;}, 2000);
//     }
// }


//La promesa lo que espera es que le pasemos dentro un argumento una funcion, podriamos utilizar una funcion flecha, pero para mantener la consistencia del codigo, vamos a utilizar una funcion anonima normal, y esta funcion recibe dos parametros, resolve y reject.

//Dentro de esta funcion, es donde vamos a ejecutar el setTimeout, y cuando el setTimeout termine de ejecutarse, en vez de hacer un return data, lo que vamos a hacer es llamar a la funcion resolve y le pasamos la data como argumento.

//La funcion Promese debe recirbir dos parametros el primer parametros resolve y el segundo se llama reject

//Dentro de la primesa incluimos el setTimeot, y cuando el setTimeout termine de ejecutarse, en vez de hacer un return data, lo que vamos a hacer es llamar a la funcion resolve y le pasamos la data como argumento.

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout( function() {
//              return data;}, 2000);
    
//     });
// }

//Con lo anterior si ejecutamos el resultado sera:

//app.js:88 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined

//Indicara que 
//Promise {<pending>}

//Pending indica que la promesa esta en estado pendiente, es decir que aun no se ha resuelto ni se ha rechazado.

//Para manejar el resultado de una promesa, utilizamos los metodos .then() y .catch().

//El metodo .then() se llama cuando la promesa se resuelve exitosamente, y recibe como argumento una funcion que recibe el valor resultante de la promesa.

//El metodo .catch() se llama cuando la promesa es rechazada, y recibe como argumento una funcion que recibe el error.

//Entonces para manejar el resultado de la promesa que retorna la funcion getData, hacemos lo siguiente:


//Entonces retorna un aprmesa que su estado es pendiente.


//let response = getData();

//console.log(response);

//Acabamos de especificar que la promesa va a esperar a que el estado setTimeout, culmine para que recien se ejecute una acción, y ahora la promesa coo va a saber que el tiempo ya culmino.

//La promesa  va a saber que ya culmino por que tenemos que ejecutar un metodo que se llame resove, que es justamente un parametro

//quedando entonces asi:

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
            
            resolve(data); //Estamos indicando a la priomesa que esta acción sincrona ya culmino pasando los 2 segundos, el parametro es la data que queremos retornar
            
            }, 2000);
    
    });
}

//Aun  asi con el response yo sigo obteniendo un apromesa 

//Podemos decir que una vez que se haya resueto la promesa cuando es decir cuando se haya ejecutado el metodo resolve, quiero que se imprima en console la data para ello


let response = getData();

//accedemos a dicha promesa que esta almacenado en response, para ello hacemos uso de un metodo que se llama then, que recibe como parametro una funcion anonima que recibe a su vez como parametro la data que retorna la promesa cuando se resuelve.

//Forma uno
// response.then( function(data) {
//     console.log(data);
// } );

//Forma con funcion flecha, dentro de esa fucniuon flecha recibimos el valor que obtuvimos 
response.then( (data) => {
    console.log(data); //Ahora vamos a pedir que se imrima en consola la data que retorna la promesa
} );

//El orden en el que se ejecuta, recordando que el setTimeout va a ser que esto se resulva despues de dos segundos

//Primero se ejecuta el continua el programa y en un momento posterior se mostraria el data
console.log('Continuando con la ejecucion del codigo...');

//como se puede apreciar no va a seguir el orden en el que se ejecuta el programa, primero se imprime el console log y despues de dos segundos se imprime la data, esto es por que la promesa se resuelve de manera asincrona, es decir no bloquea la ejecucion del programa mientras espera a que se resuelva la promesa.

//Es decir se va a ejecutar de forma asincrona, no va a bloquear la ejecucion del programa mientras espera a que se resuelva la promesa.

//comprobando la ejecución

//Primero muestra la leyenda "Continuando con la ejecucion del codigo..." y despues se ejecuta la visualización de la data en consola despues de dos segundos.

//Continuando con la ejecucion del codigo...
//app.js:144 (3) [{…}, {…}, {…}]

//Eslo que se especifico cuando el response que fue lo que se especifico con el response.then

//Por que va a esperar a que se haya resulto la promesa para recien ejecutar, esto siempre debemos a tener en cunent cuanto tengamos peticiones asincronas, como por ejemplo consultar una api, leer un archivo, etc.

//Ya que se van a demorar de manera asincrona, y no queremos que el programa se detenga mientras espera a que se resuelva la promesa, sino que queremos que continue con la ejecucion del codigo y cuando la promesa se resuelva, recien ejecutar una accion determinada.

// Como podemos apreciar, tenemos un resolve y tenemos un reject

//El resolve lo hemos ejecutado, pero que pasa si ocurre un error, como por ejemplo que la data no este disponible, para ello tenemos el reject, que es el segundo parametro de la promesa, y que se ejecuta cuando ocurre un error.

// El reject se va a ejecutar cuando nuestra fiuncion asincrona falle, por ejemplo si no se puede obtener la data, en ese caso vamos a llamar al metodo reject y le vamos a pasar un mensaje de error como argumento.

//En este caso no fallara nunca pero podremos indicarle que falle, por ejemplo dentro de la promesa, en el setTimeout, poner una pequeña condicional 

//El metodo reject como se escucha, ya que hemos podido escuchar cuando se resuelve la promesa pero cuando escuchamos falle la promesa 

//Para escuchar cuando falle la promesa, en el else se debe agregar otra funcion la fuincion catch, que recibe como parametro una funcion anonima que recibe como parametro el error que se ha producido.

//La funcion catch se encarga de manejar los errores que puedan ocurrir durante la ejecucion de la promesa.

//el catch se anida al then, de la siguiente manera:

function getData() {
    return new Promise((resolve, reject) => {
        setTimeout( function() {
            if(false){   //Si la condicion que tenemos aca es verdadera, entonces ejecutamos el resolve
                resolve(data); //Queremos que se resuelva
            }else{ //mientras que en el caso de que sea falso se ejecuta el metodo reject
                reject('No se pudo obtener la data'); //Indicamos que no se pudo obtener la data, mensaje de error
            }
            
            
            
            }, 2000);
    
    });
}


let response2 = getData();

//La funciona catach se encarga de manejar los errores que puedan ocurrir durante la ejecucion de la promesa.

//Es decir la fuicnion catch, va a escuchar, en el caso de que se ejecute el metodo que se llama reject, de igual manera este metodo espera recibir una funcion y va a recibir lo que estemos mandando lo que tengamos en el metodo reject, ej

response2.then( (data) => {
    console.log(data); //Ahora vamos a pedir que se imrima en consola la data que retorna la promesa
} ).catch( (error) => {//rescatamos el error que se ha producido dentro de una variable llamada error
    //Podemos pedir que imprima en consola el mensaje
    console.log('Error:', error); //Para que este mensaje en el if debemos cambiar al valor de false, es decir envia el mensaje del reject
});

console.log('Continuando con la ejecucion del codigo...');


//Esta es la forma de ytrabajar con operaciones asincronas en JavaScript utilizando promesas, el metodo then para manejar el resultado exitoso y el metodo catch para manejar los errores.Que en lugar de retornar directamente una data, trabajemos con una promesa por que ya hemos especificado que si continuara con el flujo normal, fallaria dandonos el undefined entonces tendriamos que trabajar con una promesa y escuchamos la respuesta la promesa con dos posibles respuestas si el codigo de la promea en el response escuchamos la respuesta de la prmesa, 

//Si se resuelve satisfactriamente es decir el then se ejecuta el bloque de codigo de la data, pero si la promesa falla se ejecuta el metodo que tenemos en el catch


// To do esto podria parecer un poco enredado y si es un poco dificil de comprender al principio, pero con la practica se vuelve mas sencillo y natural trabajar con promesas en JavaScript.

//Para ello en el siguiente rema se veran otras novedades que tiene JS, que se trata de las fucniones sync y await, que nos permiten trabajar con promesas de una manera aun mas sencilla y legible.