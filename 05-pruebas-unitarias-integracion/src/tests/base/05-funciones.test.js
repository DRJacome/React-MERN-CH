/* PRUEBAS UNITARIAS DE FUNCIONES */

import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../../bases/05-funciones"

describe('Pruebas en 05-funciones', () => {
  test('Debe retornar un objeto', () => {

    const userTest = ({
      uid: "ABC123",
      username: "usuario_uno"
    })

    const user = getUser()
    console.log(user);

    /* Método para comparar objetos */
    expect(user).toEqual(userTest)
  })

  /* Tarea */
  test('Debe retornar un objeto con el valor de "userName" pasado como argumento', () => {

    const nombre = "David"
    const user = getUsuarioActivo(nombre)

    expect(user).toEqual({
      uid: "ABC6185",
      userName: nombre
    })

  })
})