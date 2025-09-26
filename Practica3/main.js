import { restar, verificarUsuario } from './utils.js';

console.log(restar(22, 5));
console.log(restar(5, 4));
console.log(restar(11, 7));
console.log(restar(8, 3));

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));
verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err)); 

function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000);
  });
}

async function obtenerDatos() {
  const resultado = await simularPeticionAPI();
  console.log(resultado);
}

obtenerDatos();