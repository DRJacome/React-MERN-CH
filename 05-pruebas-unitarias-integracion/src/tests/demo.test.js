/* PRUEBAS UNITARIAS */

describe('Pruebas en el archivo demo.test.js', () => {

  test('Deben de ser iguales los dos strings', () => {
    // 1. Inicialización

    const mensaje = 'Hola mundo'

    //2. Estímulo
    const mensaje2 = `Hola mundo`

    //3. Observar comportamiento
    expect(mensaje).toBe(mensaje2)
  })
})