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
