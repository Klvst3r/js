//Funciones Flecha

//forma con Vanilla JS

function nombre(){
    console.log("Mi nombre es Klvst3r");
}

nombre();


//La foma de definir nuestras funciones flecha

//Definimos la funcion con una estructura diferente, para ahorrar codigo

const nombreFlecha = () => {
    console.log("Mi nombre es Klvst3r con funciones flecha");
}

nombreFlecha();


// Ahopra quiero que retorne un valor

let valor = nombreFlecha();
console.log(valor); //undefined porque no hay un return


const retornaValor =() => {
    return "Este es un valor retornado por una funcion flecha";
}

console.log(retornaValor());

//Simplificamos el codigo si solo tenemos una linea de codigo en la funcion
const nombre2 = () => "Este es un valor retornado por una funcion flecha simplificada:" + "kLVST3r";

let val = nombre2();    
console.log(val);

//Si tenemos un parametro, no es necesario poner los parentesis
const nombre3 = nombre => "Mi nombre es: " + nombre;

let val2 = nombre3("Klvst3r");
console.log(val2);

//Si tenemos mas de un parametro, si es necesario poner los parentesis
const nombreCompleto = (nombre, apellido) => "Mi nombre completo es: " + nombre + " " + apellido;

let val3 = nombreCompleto("Klvst3r", "IO");
console.log(val3);