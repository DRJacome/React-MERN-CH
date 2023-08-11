/* PRUBAS ANITARIAS CON ARRAYS */

import { retornaArreglo } from "../../bases/07-desestructuracion-arrays"

describe('Pruebas en desestructuración', () => {
  test('Debe retornar un string y un número', () => {

    /* 1. Forma normal. 
    * En esta forma se compruban los valores almacenados en un array.
    * En la validación del expect() se comprueban las posiciones del array.
    */
    const array = retornaArreglo()
    expect(array).toEqual(["ABC", 123])

    /* 2. Forma desestructurada. 
    * En esta forma se desescructuran los valores y se pueden validar en el expect()
    * los valores de las variables o que la variable tenga el tipo de valor esperado.
    */
    const [letras, numeros] = retornaArreglo()

    console.log(typeof letras);

    expect(letras).toBe("ABC")
    expect(typeof letras).toBe("string")


    expect(numeros).toBe(123)
    expect(typeof numeros).toBe("number")
  })
})