function restar(a, b) {
  return a - b;
}

function verificarUsuario(usuario){
    return new Promise((resolver, reject) => {
        if (usuario === "admin"){
            resolver("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}
export { restar, verificarUsuario };
