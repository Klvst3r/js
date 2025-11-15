/**
 * Fetch es una API de JavaScript que proporciona una forma fácil de realizar solicitudes HTTP desde el cliente. 
 * Veremos cómo utilizar fetch para interactuar con APIs externas y obtener datos para tu aplicación Vue 3.
*/

/**
 * Ahor alo que vamos a hacer es realizar nuestra primera petición a alguna api, para lo cual queremos:
 * Queremos hacer un apetición a la siguiente API
 * Google: jso place holder
 * https://jsonplaceholder.typicode.com/
 *  
*/

/**
 * Es un aAPI que dara datos falsos, servira para mostrar ierta información, en nuestra aplicación, los tipos de datos que dara son, un listado de post, 
 * un listado de comentarios, un listado de albums, listados de fotos, listados de cosas por hacer o todos, o listado de usuaruos, etc.
 * 
 * Asi como queremos recuperar esta inforamcicón qye retorne para mi aplicación y que muestre en consola vamos a hascer uso del link que menos datos da, usuarios.
*/

/**
 * Para rescatar este listado de10 usuarios
 * https://jsonplaceholder.typicode.com/users
 * 
 * Lo que tenemos que hacer es una petición a la url anterior y asi con cada url que nos da la API
 * 
 * La forma de como vamos a haacer una petición a esta url, desde nuestra aplicación de JS
*/

/**
 * Para hacer una petición al API, podemos hacer uso de una funcion de JS que se llama fetch haremos:
 * Esta funcion espera que le pasemos la la ur de la api que queremos consumir.
*/

//  fetch('https://jsonplaceholder.typicode.com/users');

/**
 * La funcion fetch, lo que va a ahacer es devolver una promesa y como lo que va  a hacer es devolver, 
 * lo primero que tiene que hacer es lograr escucharla y esperar que se resuleva esta promesa, para rescatar los datos que quermos
*/

/**
 * La forma de como escuchamos una promesa es la siguiente, dentro de then colocar una funcion tradicional o flecha, dentro de la funicon recibiamos el parametro 
 * que nos devolvia una vez que se resuleva y entre las {} hacer lo siguiete.
 * Por ejemplo imprimir en soncola dicha rspuesta (response), veamos que obtenemos
*/

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then( () => {
//         console.log(response);
//      });

// en e navegador actualizamos , pero son sale error, ya que.

//Aquí el then recibe la respuesta del fetch, pero tú no estás capturando ese valor. Por eso response no está definido.
//La forma correcta es: ( Recuperr la nforamcipón de la api)


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error(error));


/**
 Explicación rápida:

El primer .then(response => ...) recibe el objeto Response de fetch.

response.json() convierte ese body en JSON.

El segundo .then(data => ...) recibe el JSON ya convertido.

Agregar .catch() te permite manejar errores.

Si solo querías imprimir la respuesta cruda:

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(response));
*/

// Es necesario serializarla para apreciar la inforamción en la aplicación, lo podemos hacer de la siguiete forma

//una vez recibida la respuesta accediendo a la respuesta y serializarla a travez del metodo json
// el .json lo que hace es otra vez es doveolver una promesa, tendria que esperar a que se resuleva nuevamente esta promesa para recien ejecutar aca algo.

/**
 * Vamos a hacer lo mismo, poner .then para eserar a que se resuelva la prmesa y dentro hacer lo mismo, que es recibir el parametro que nos devuelve cuando se resuelva
*/


//Probamos 

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         response.json().then(data => {
//             console.log(data);
//         })
//     });

//Tambien de esta manera podremos apreciar en consola
/*

0: {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', address: {…}, …}1: {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', address: {…}, …}2: {id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', address: {…}, …}3: {id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', address: {…}, …}4: {id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', address: {…}, …}5: {id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', address: {…}, …}6: {id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', address: {…}, …}7: {id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', address: {…}, …}8: {id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', address: {…}, …}9: {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', address: {…}, …}length: 10[[Prototype]]: Array(0)

*/

/**
 * Imprimimos los valores que se tienen en la API, lo anterior lo podriamos colocar en un bucle y mostraro en nuestra aplicación
 * Trabajarlo de esta manera, ya hemos escuchado una prmesa, luego aparece otra promesa, Se puede ver lgo feo, entonces una manera diferente de hacer esto, seria lo sigiete. En vez de colocar un response .json y escucharlo, vamos a pedir que retorne:
 * un return response.json().
 * 
 * Asi cuando yo retorne esto 
*/

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json();
//         });

/**
 * Al pedir que retorne esto anterior en lugar de encadenarlo con un .then lo podria poner por fuera
 * */        


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         return response.json();
//         }).then((data) => {
//             console.log(data);
//         });




// el rsultado seria el mismo, solo que se veria un poco mas ordenado, si inspeccionamos en la consola deberia seguir funiocnando exactamente igual

/*
[
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]
*/


// Ahora para sacar la información, el .then ya no esta encadenado, si no esta fuera.

/*
Ahora lo que podremos hacer, decidir si utilizamos funiconaes flecha y solo esperamos recibir un unico parametro en vez de clocarlo dentro deunacadena.
*/

// Ahora si actualizamos todo funciona igual 


/*
Que mas podemos hacer: 
Cuando estamos esperando que me retorne algo yo podria perfectamente omitir las llaves y omitir el return, quedando: 
*/

//Asi, todo en una unica linea

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json()).then((data) => {
//             console.log(data);
//         });

// De iaagual manera la funciona flecha lo que estaria haciendo es retornar el el valor de response.json() que es tra promesa, lo que hacemos es ver como borramos lineas de codigo.

// Tambien podemos hacer

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(data => {
            console.log(data);
        });

// Una vez que se ha ecibido lo mostramos en consola.

// Esta es la forma para hacer peticiones a la API, como hemos visto es un proceso asincrono y tenems que trabajarlo ya sea con esto:

/*
  .then((response) => response.json())
    .then(data => {
            console.log(data);
*/

//o co funicones async 

/**
 * Regresando a a pgina:
 * https://jsonplaceholder.typicode.com/users
 * 
 * Tenemos un ejemplo de como hacer la peticion y es:
 * 
 * 
*/

/*
Try it
Run this code here, in a console or from any site:

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
Run script
{}

De igual manera a travez d eun 

.then(response => response.json())

Recibimos el resultado de la promesa lo serializamos : response.json() y luego la rspuesta a esta nueva proesa lo recibioms aca:
.then(json => console.log(json))

Es exactamente lo mismo que el ejemplo realizado, en nuestro caso es paso a paso. 



*/
