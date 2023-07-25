/* TEMPLATE STRINGS */

const nombre = "David"
const apellido = "Rodríguez"

//const nombreCompleto = nombre + " " + apellido
const nombreCompleto = `
${nombre} 
${apellido}
${2 + 2}
`

console.log(nombreCompleto);

function getSaludo(nombre) {
  return "Hola " + nombre
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);