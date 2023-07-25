/* DESESTRUCTURACIÓN DE ARRAYS */

const personajes = ["Goku", "Vegeta", "Trunks"]

const [, , p3] = personajes

console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123]
}

console.log(retornaArreglo());
const [letras, numeros] = retornaArreglo()

console.log(letras, numeros);

const usestate = (valor) => {
  return [valor, () => { console.log("Hola mundo") }]
}

const [nombre, setNombre] = usestate("Goku")


console.log(nombre); 
setNombre()