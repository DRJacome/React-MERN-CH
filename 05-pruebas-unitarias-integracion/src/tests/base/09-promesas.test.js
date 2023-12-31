/* PRUEBAS UNITARIAS CON TAREAS ASÍNCRONAS*/

import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";

describe('Pruebas con promesas', () => {
  test('Debe retornar un héroe de forma asíncrona', (done) => {
    const id = 1;
    getHeroeByIdAsync(id)
      .then(heroe => {
        expect(heroe).toBe(heroes[0]);
        done()
      })
  })
})

test('Debe retornar un error si el héroe por id no existe', (done) => {
  const id = 10;
  getHeroeByIdAsync(id)
    .catch(error => {
      /* expect(error).toBe("No se pudo encontrar el héroe."); */
      done()
    })
})