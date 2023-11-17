import React from 'react'
import { ListaHeroe } from '../heroes/ListaHeroe'
export const VistaDC = () => {
  return (
    <div>
      <h1>Superhérores de DC</h1>
      <hr />
      <ListaHeroe editora='DC Comics' />
    </div>
  )
}