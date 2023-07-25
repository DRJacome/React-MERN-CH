/* FUNCIONES: NORMALES Y DE FLECHA */

const saludar = function (nombre) {
  return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}
const saludar3 = (nombre) => `Hola, ${nombre}`

const saludar4 = (nombre) => `Hola mundo`


console.log(saludar("David"));
console.log(saludar2("Pedro"));
console.log(saludar3("Ana"));
console.log(saludar4());


/* Retorno de objeto implícito */
const getUser = () => ({
  uid: "ABC123",
  username: "usuario_uno"
})


console.log(getUser());

const user = getUser()
console.log(user);



const getUsuarioActivo = (nombre) => ({
  uid: "ABC6185",
  username: nombre
})

const usuarioActivo = "Fernando"

console.log(getUsuarioActivo(usuarioActivo));

console.log();