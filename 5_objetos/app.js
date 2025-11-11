// Los objetos literales son una de las estructuras de datos más utilizadas en JavaScript. Veremos cómo crear y manipular objetos literales, y cómo pueden ser utilizados en la construcción de aplicaciones web.


//Podemos definir nuestra información de manera ordenada utilizando objetos literales

//Podemos hacr uso de los objetos

let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    mascotas: ["perro", "gato", "pez"],
    
    // nuestro objeto persona podermos referirla con this por que estamos dentro de la definición del objeto
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

//Acceder a las propiedades del objeto, aca accedemos de forma externa al objeto 
console.log(persona.nombre); // Juan
console.log(persona.edad); // 30

//mascotas es un arreglo dentro del objeto
console.log(persona.mascotas[1]); // gato

//recorrer e imprimir todas las mascotas
persona.mascotas.forEach(function(mascota) {
    console.log(mascota);
});
// perro
// gato
// pez

//Llamar al método del objeto
persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años.

//Agregar una nueva propiedad al objeto
persona.pais = "México";
console.log(persona.pais); // México

//Modificar una propiedad existente
persona.edad = 31;
console.log(persona.edad); // 31

//Eliminar una propiedad del objeto
delete persona.profesion;
console.log(persona.profesion); // undefined

//Recorrer las propiedades del objeto
for (let clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}
// nombre: Juan
// edad: 31
// saludar: function() { ... }
// pais: México

//Los objetos literales son fundamentales en JavaScript y se utilizan ampliamente para representar datos complejos y estructurados en aplicaciones web. Su flexibilidad y facilidad de uso los convierten en una herramienta esencial para cualquier desarrollador web.     

//Ejemplo de uso de objetos literales en una aplicación web

let producto = {
    id: 1,
    nombre: "Laptop",
    precio: 1500,
    descripcion: "Una laptop potente para desarrollo web",
    mostrarInfo: function() {
        console.log(`Producto: ${this.nombre}\nPrecio: $${this.precio}\nDescripción: ${this.descripcion}`);
        
    }
};


//impresion de valores por fuera de la definción
let texto = `Producto: ${producto.nombre}, Precio: $${producto.precio}, Descripción: ${producto.descripcion}`;

// Simular la adición del producto a un carrito de compras
function agregarAlCarrito(producto) {
    console.log(`El producto ${producto.nombre} ha sido agregado al carrito.`);
}

// Mostrar la información del producto
producto.mostrarInfo();

// Agregar el producto al carrito
agregarAlCarrito(producto);     

// Producto: Laptop
// Precio: $1500
// Descripción: Una laptop potente para desarrollo web
// El producto Laptop ha sido agregado al carrito.  

//En resumen, los objetos literales son una herramienta poderosa en JavaScript que nos permite organizar y manipular datos de manera eficiente en nuestras aplicaciones web.



//Podremos agregar propiedades dinamicamente a los objetos

//agregamos a la nueva propiedad al objueto

persona.nombre = "Patroncito";
persona.id = "12345";  

console.log(texto);
console.log(persona.nombre); //Patroncito
console.log(persona.id); //12345

