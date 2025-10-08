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


//Ejercicio 3
const personas = [
    { nombre: "Ana", edad: 22},
    { nombre: "Luis", edad: 35},
    { nombre: "Maria", edad: 28}
];
//Tu código aquí

// 1.Biscar a la persona con nombre "Luis"
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log("persona encontrada: ", personaLuis);

//2.Imprimir el nombre de cada persona con su edad 
personas.forEach(persona => {
    console.log(persona.nombre + " tiene " + persona.edad + " años ");
});

//3. Sumar todas las edades 
const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log("Suma total de edades: ", totalEdades);
