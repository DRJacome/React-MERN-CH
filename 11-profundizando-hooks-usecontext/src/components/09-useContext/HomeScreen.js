import React, { useContext } from 'react'
import { Contexto } from './UserContext'

export const HomeScreen = () => {
  const { usuario } = useContext(Contexto)
  console.log(usuario);
  return (
    <div>
      <h1>Pantalla de inicio</h1>
      <hr />
      <pre>{JSON.stringify(usuario, null, 3)}</pre>
    </div>
  )
}