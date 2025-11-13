

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




/* Nuestra en consola l ainformación anterior, pero quisa la forma de colocar nuestro codigo es mucho mas amigable a nuesra vista ya que se estaba 
que ocurre, si es que falla nuestro codigo es decir si se ejecutara el metodo reject, en vez de resolve, el metodo await solo espera que se resuelva nuestra promesa para asignarsela a response.

Pero que ocurre si se ejecuta el reject.

Se tendria que atrapar de otra manera, veamoslo en el siguiente script
*/


function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            if(false){ //Aca siempre se resolvera la promesa
                resolve(data);
            }else{
                reject("Error: No se pudo obtener los datos");
            }
        }, 2000);
    });

}

//Ahora tendriamos que colocar un try catch, 

async function fetchData() { 
    try {
        //Por aca colocamos nuevamente 
        let response = await getData(); //Llamamos a la funcion que nos devuelve una promesa
        console.log(response);        
    } catch (arr) { //El catch va a capturar el error, es dcir lo que tenemos en el reject
        //Vamos a poner el console.log para imprimir en consola el error.
        console.log(err);
    }
}

/* 
Con lo anterior lo que vamos a  lograr, Si la promesa se resuelve satisfactoriamente se ejecuta el codigo 
    let response = await getData(); 
    console.log(response);        
*/

/**
 * En el caso de que la promesa fallase se ejecutara el reject y se va a ejecutar 
 *  console.log(err);
 * Este mensaje de error se captura, en la variable err
 * 
 */

// Para comprobarlo en el navegador


fetchData(); //Ejecutamos



console.log("Inicio de la obtencion de datos");

//Entonces el resultado dara, cuando es el caso satisfactorio

/**
     Inicio de la obtencion de datos
    app.js:50 (3) [{…}, {…}, {…}]0: {id: 1, name: 'John', age: 10}1: {id: 2, name: 'Mark', age: 15}2: {id: 3, name: 'Jane', age: 12}length: 3[[Prototype]]: Array(0)
 
  
*/




/* Pero en el caso de que la promesa fallase es decir:
if(false){ 

actualizamos y sale el siguiente mensaje:


Inicio de la obtencion de datos
app.js:53 Uncaught (in promise) ReferenceError: err is not defined
    at fetchData (app.js:53:21)



*/

/**
 * Esta es la otra forma de trabajar con operaciones asincronas, ya elegiremos cual preferimos trabajar, todo es muy importante trabajar con ambas por que en las versiones de vue se trabajaran con una y en ocaciones se trabajar con otras.
 */