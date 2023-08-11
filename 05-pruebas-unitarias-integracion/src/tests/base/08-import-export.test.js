/* PRUEBAS UNITARIAS IMPORT-EXPORT */

import { getHeroeById, getHeroeByOwner } from "../../bases/08-import-export"
import heroes from "../../data/heroes"

describe('Pruebas en funciones que importan datos', () => {
  test('Debe retornar un héroe por id', () => {

    const id = 1
    const heroe = getHeroeById(id)

    console.log(heroe);

    const heroeData = heroes.find(h => h.id === id)

    expect(heroe).toEqual(heroeData)
  });

  test('Debe retornar undefined si el héroe no existe', () => {

    const id = 10
    const heroe = getHeroeById(id)

    console.log(heroe);

    expect(heroe).toBe(undefined)
  })

  test('Debe retornar un arreglo con los héroes de DC', () => {

    const owner = 'DC'
    const heroe = getHeroeByOwner(owner)

    console.log(heroe);

    const heroesData = heroes.filter(h => h.owner === owner)
    console.log(heroesData);

    expect(heroe).toEqual(heroesData)
  });

  test('Debe retornar un arreglo con los héroes de Marvel', () => {

    const owner = 'Marvel'
    const heroes = getHeroeByOwner(owner)

    console.log(heroes);

    const heroesData = heroes.filter(h => h.owner === owner)
    console.log(heroesData);

    expect(heroes.length).toBe(2)
  });

})