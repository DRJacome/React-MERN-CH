/* OPERADOR TERNARIO */

const activo = true
/* let mensaje = '' 

// 1. Condicional típico.
/* if (activo) {
  mensaje = 'Activo'
} else {
  mensaje = 'Inactivo'
} */

// 2. Condicional ternario.
/* const mensaje = activo ? 'Activo' : 'Inactivo' */
/* const mensaje = activo ? 'Activo' : null */

const mensaje = activo && 'Activo'

console.log(mensaje);