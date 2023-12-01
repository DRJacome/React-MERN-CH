import React from 'react'
import { heroes } from "../data/heroes";

export const getHeroesByNombre = (nombreHeroe = '') => {
  if (nombreHeroe === '') {
    return []
  }
  nombreHeroe = nombreHeroe.toLocaleLowerCase()
  return heroes.filter(heroe => heroe.superhero.toLowerCase().includes(nombreHeroe))
}