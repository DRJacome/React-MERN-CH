/* PRUEBAS UNITARIAS DE STRINGS */

import '@testing-library/jest-dom'
import { getSaludo } from "../../bases/02-template-string"

describe('Pruebas en 02-template-string.js', () => {
  test('getSaludo debe retornar "Hola David!"', () => {

    const nombre = 'David'
    const saludo = getSaludo(nombre)
    //console.log(saludo);

    expect(saludo).toBe('Hola ' + nombre + '!')

  })

  // getSaludo debe ertornar "Hola Carlos!" si no hay argumento 'nombre'
  test('getsaludo() debe retornar "Hola Carlos" si no hay argumento "nombre"', () => {
    const saludo = getSaludo()

    /* Método para comparar strings */
    expect(saludo).toBe('Hola Carlos!')
  })
})