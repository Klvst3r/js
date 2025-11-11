//VAmos a definir variables

let nombre = "Klvst3r";
let apellido = "IO";
let edad = 25;

//Vamos a definir una funcion que retorne un objeto con los datos de la persona

const crearPersona = (nombre, apellido, edad) => {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

let persona = crearPersona(nombre, apellido, edad);
console.log(persona);

//Otra forma de definir la funcion creando el objeto

const crearPersona2 = (nombre, apellido, edad) => ({
    nombre: nombre,
    apellido: apellido,
    edad: edad
});

let persona2 = crearPersona2("Juan", "Perez", 30);
console.log(persona2);

//Si el nombre de la propiedad y el valor son iguales, podemos simplificar aun mas el codigo

const crearPersona3 = (nombre, apellido, edad) => ({
    nombre,
    apellido,
    edad
});

let persona3 = crearPersona3("Maria", "Gomez", 28);
console.log(persona3);

//Vamos a definir una funcion que retorne el doble de un numero

const doble = numero => numero * 2;

let resultado = doble(5);
console.log("El doble de 5 es: " + resultado);

//Vamos a definir una funcion que retorne el triple de un numero

const triple = numero => numero * 3;

let resultado2 = triple(5);
console.log("El triple de 5 es: " + resultado2);

//Vamos a definir una funcion que retorne el cuadrado de un numero   
const cuadrado = numero => numero * numero;

let resultado3 = cuadrado(5);
console.log("El cuadrado de 5 es: " + resultado3);      

//Vamos a definir una funcion que retorne el area de un rectangulo

const areaRectangulo = (base, altura) => base * altura;

let area = areaRectangulo(5, 10);
console.log("El area del rectangulo es: " + area);

//Vamos a definir una funcion que retorne el perimetro de un rectangulo

const perimetroRectangulo = (base, altura) => 2 * (base + altura);

let perimetro = perimetroRectangulo(5, 10);
console.log("El perimetro del rectangulo es: " + perimetro);

//Vamos a definir una funcion que retorne el area de un circulo

const areaCirculo = radio => Math.PI * radio * radio;

let areaC = areaCirculo(5);
console.log("El area del circulo es: " + areaC);

//Vamos a definir una funcion que retorne el perimetro de un circulo

const perimetroCirculo = radio => 2 * Math.PI * radio;

let perimetroC = perimetroCirculo(5);
console.log("El perimetro del circulo es: " + perimetroC);      

//Vamos a definir una funcion que retorne la edad despues de n años

const edadDespuesDeNAnios = (edad, n) => edad + n;

let edadFutura = edadDespuesDeNAnios(25, 5);
console.log("La edad despues de 5 años sera: " + edadFutura);           

//Vamos a definir una funcion que retorne si un numero es par o impar

const esPar = numero => numero % 2 === 0 ? "Es par" : "Es impar";

let numeroPar = esPar(4);
console.log("El numero 4: " + numeroPar);

let numeroImpar = esPar(5);
console.log("El numero 5: " + numeroImpar);

//Vamos a definir una funcion que retorne el mayor de dos numeros

const mayorDeDos = (a, b) => a > b ? a : b;

let mayor = mayorDeDos(10, 20);
console.log("El mayor entre 10 y 20 es: " + mayor);

//Vamos a definir una funcion que retorne el menor de dos numeros

const menorDeDos = (a, b) => a < b ? a : b;

let menor = menorDeDos(10, 20);
console.log("El menor entre 10 y 20 es: " + menor);

//Vamos a definir una funcion que retorne la suma de un array de numeros

const sumaArray = numeros => numeros.reduce((acumulador, actual) => acumulador + actual, 0);

let suma = sumaArray([1, 2, 3, 4, 5]);
console.log("La suma del array es: " + suma);

//Vamos a definir una funcion que retorne el promedio de un array de numeros

const promedioArray = numeros => sumaArray(numeros) / numeros.length;

let promedio = promedioArray([1, 2, 3, 4, 5]);
console.log("El promedio del array es: " + promedio);       