import React, { useContext } from 'react'
import { AutenticacionContext } from '../../auth/AutenticacionContext'
import { types } from '../../types/types'

export const VistaLogin = ({ history }) => {

  /* Autenticación de usuario. */
  const { dispatch } = useContext(AutenticacionContext)
  const gestionarLogin = () => {
    //history.push('/')

    const ultimoPath = localStorage.getItem('lastPath') || '/'

    dispatch({
      type: types.login,
      payload: {
        nombre: 'David'
      }
    })
    history.replace(ultimoPath)
  }
  return (
    <div className="container mt-5">
      <h1>¡Hola! identifícate</h1>
      <hr />
      <button className="btn btn-primary" onClick={gestionarLogin}>Identificarse</button>
    </div>
  )
}