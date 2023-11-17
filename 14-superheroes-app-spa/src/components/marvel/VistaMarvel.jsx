import React from 'react'
import { ListaHeroe } from '../heroes/ListaHeroe'

export const VistaMarvel = () => {
  return (
    <div>
      <h1>Superhérores de Marvel</h1>
      <hr />
      <ListaHeroe editora='Marvel Comics' />
    </div>
  )
}