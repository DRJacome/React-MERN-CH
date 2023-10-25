import React, { useContext } from 'react'
import { Contexto } from './UserContext'

export const LoginScreen = () => {
  // 1. Obtener la referencia al userContext.
  const { setUsuario } = useContext(Contexto)
  // 2. setUser.
  /*  {
     id: 123,
     nombre: 'David'
   } */

  return (
    <div>
      <h1>Pantalla de Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={() => {
        setUsuario({
          id: 123,
          nombre: 'David'
        })
      }}>Login</button>
    </div>
  )
}