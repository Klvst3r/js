// La destructuración de objetos es una técnica de JavaScript que permite extraer propiedades de un objeto y asignarlas a variables individuales. Veremos cómo utilizar esta técnica para hacer tu código más limpio y legible.

let persona = {
    nombre: "Ana",
    edad: 25,
    profesion: "Diseñadora",
    direccion: {
        ciudad: "Barcelona",
        pais: "España"
    }
};

// Destructuración básica
let { nombre, edad } = persona;
console.log(nombre); // Ana
console.log(edad); // 25

// Destructuración con alias
let { profesion: trabajo } = persona;
console.log(trabajo); // Diseñadora

// Destructuración de propiedades anidadas
let { direccion: { ciudad, pais } } = persona;
console.log(ciudad); // Barcelona
console.log(pais); // España

// Destructuración en parámetros de función
function mostrarInfo({ nombre, profesion }) {
    console.log(`Nombre: ${nombre}, Profesión: ${profesion}`);
}

mostrarInfo(persona); // Nombre: Ana, Profesión: Diseñadora

// Valores predeterminados en destructuración
let { telefono = "No proporcionado" } = persona;
console.log(telefono); // No proporcionado

// Destructuración combinada con el operador rest
let { nombre: n, ...resto } = persona;
console.log(n); // Ana
console.log(resto); // { edad: 25, profesion: 'Diseñadora', direccion: { ciudad: 'Barcelona', pais: 'España' } }

// La destructuración de objetos es una herramienta poderosa que mejora la legibilidad y mantenibilidad del código al permitir extraer fácilmente las propiedades necesarias de los objetos.    



console.log("----- Ejemplo adicional -----");

let persona2 = {
    nombre: "Luis",
    edad: 40,
    profesion: "Ingeniero",
    mascotas: ["loro", "hamster",   "tortuga"],  
}

//Ahora podremos tal vez necesitar lo ontrario, tener un objeto  y cada una de estas propiedades y tener los valores en unavariable individual
let {nombre: nombre2, edad: edad2, profesion: profesion2, mascotas: mascotas2} = persona2;

//podemos separar los valores en cada varaibel por ejemplo:

let name = persona2.nombre;
let age = persona2.edad;
let prof = persona2.profesion;
let pets = persona2.mascotas;

//podriamos mostrarlo en consola

console.log(name); // Luis
console.log(age);
console.log(prof); // Ingeniero
console.log(pets); // ["loro", "hamster", "tortuga"]

console.log(nombre2); // Luis
console.log(edad2); // 40
console.log(profesion2); // Ingeniero
console.log(mascotas2); // ["loro", "hamster", "tortuga"]

//Podemos acceder a cada una de las mascotas individualmente
let [mascota1, mascota2, mascota3] = mascotas2;

console.log(mascota1); // loro
console.log(mascota2); // hamster
console.log(mascota3); // tortuga

//De esta forma hemos desestructurado un objeto y un array dentro de ese objeto, obteniendo cada valor en variables individuales para su uso posterior. 



// Esto es especialmente útil cuando trabajamos con objetos complejos y necesitamos acceder a múltiples propiedades de manera clara y concisa.

//Lo anterior puede ser algo incomodo, entonces una manera sencilla podremos hacerlo por medio de la destructuracion de objetos

//Definimos una constante - persona2, dentro de las llaves colocamos las propiedades que queremos destructurar

const {nombre: nombre3, edad: edad3, profesion: profesion3, mascotas: mascotas3} = persona2;

//Hacer esto es lo mismo que esta en la parte de arriba pero de forma mas sencilla, destructurando el objeto en diferentes variables

console.log('Volvemos a imprimir los valores destructurados:');
console.log(persona2.nombre); // Luis
console.log(persona2.edad);
console.log(persona2.profesion); // Ingeniero
console.log(persona2.mascotas); // ["loro", "hamster", "tortuga"]

console.log(nombre3); // Luis
console.log(edad3); // 40
console.log(profesion3); // Ingeniero
console.log(mascotas3); // ["loro", "hamster", "tortuga"]   

//Destructurar no es eliminar el objeto original, el objeto sigue existiendo y podemos seguir accediendo a sus propiedades de la forma tradicional
console.log('Accediendo al objeto original con persona2:');
console.log(persona2); // Imprime todo el objeto persona2

//La destructuración de objetos es una técnica poderosa en JavaScript que mejora la legibilidad y mantenibilidad del código al permitir extraer fácilmente las propiedades necesarias de los objetos.
console.log("Tenemos el objeto original intacto con persona:");
console.log(persona);