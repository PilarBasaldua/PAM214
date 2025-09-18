let nombre = "Armando";
const edad = 25;

nombre = "Ana Maria";

const saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";
//Muestra en consola en contenido de saludo 

console.log(saludo)




const cuadrado = numero => numero * numero;

console.log(cuadrado(2));  // 4
console.log(cuadrado(5));  // 25
console.log(cuadrado(10)); // 100


/* Crea una arrow function llamada saludoPersonalizado que reciba dos parámetros: nombre y edad, y retorne una cadena como la siguiente*/
//"Hola, me llamo Isay y tengo 37 años. "
const saludoPersonalizado = (nombre, edad) => {
    return "Hola, me llamo " + nombre + " y tengo " + edad + " años.";
};

console.log(saludoPersonalizado("Isay", 37));
