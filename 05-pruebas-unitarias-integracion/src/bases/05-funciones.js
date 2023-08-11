/* FUNCIONES: NORMALES Y DE FLECHA */

const saludar = function (nombre) {
  return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`
}
const saludar3 = (nombre) => `Hola, ${nombre}`

const saludar4 = (nombre) => `Hola mundo`

/* Retorno de objeto implícito */
export const getUser = () => ({
  uid: "ABC123",
  username: "usuario_uno"
})

// Tarea
export const getUsuarioActivo = (nombre) => ({
  uid: "ABC6185",
  userName: nombre
})