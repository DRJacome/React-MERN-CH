import React, { useContext } from 'react'
import { Contexto } from './UserContext'

export const AboutScreen = () => {
  const { usuario, setUsuario } = useContext(Contexto)
  const gestionarClick = () => {
    setUsuario({})
  }
  return (
    <div>
      <h1>Acerca de</h1>
      <hr />
      <pre>{JSON.stringify(usuario, null, 3)}</pre>
      <button className='btn btn-primary' onClick={gestionarClick}>Cerrar sesión</button>
    </div>
  )
}