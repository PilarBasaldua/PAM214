//Ejercicio 1
const persona = {
    nombre:  "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad:"Qro",
        pais: "MX"
    }
};
//Aplica destructuración aqui
const {nombre, edad, direccion: {ciudad } } = persona;
//Imprime el mensaje
console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ".");

// Ejercicio 2
const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250},
    { nombre: "Teclado", precio: 750},
    { nombre: "Monitor", precio: 3000}
];
//Tu código aquí 
const nombres = productos 
    .filter(producto => producto.precio > 1000)
    .map(producto => producto.nombre);

console.log(nombres); //["Laptop", Monitor""]