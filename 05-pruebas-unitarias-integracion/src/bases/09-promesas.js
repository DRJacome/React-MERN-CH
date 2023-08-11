/* PROMESAS */

import { getHeroeById, getHeroeByOwner } from "./08-import-export";

/* const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const heroe = getHeroeById(2)
    console.log(heroe);
    resolve(heroe)
    reject('No se pudo encontrar el héroe.')
  }, 2000)
})

promesa.then((heroe) => {
  console.log('Héroe:', heroe)
}).catch(err => console.warn(err)) */

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id)
      if (heroe) {
        resolve(heroe)
      } else {
        reject('No se pudo encontrar el héroe.')
      }
    }, 1000)
  })
}
