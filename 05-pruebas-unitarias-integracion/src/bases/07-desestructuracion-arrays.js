/* DESESTRUCTURACIÓN DE ARRAYS */

const personajes = ["Goku", "Vegeta", "Trunks"]

const [, , p3] = personajes

console.log(p3);

export const retornaArreglo = () => {
  return ["ABC", 123]
}

console.log(retornaArreglo());
const [letras, numeros] = retornaArreglo()

console.log(letras, numeros);

const usState = (valor) => {
  return [valor, () => { console.log("Hola mundo") }]
}

const [nombre, setNombre] = usState("Goku")


console.log(nombre);
setNombre()