import React from 'react'

export const VistaLogin = ({ history }) => {

  const gestionarLogin = () => {
    //history.push('/')
    history.replace('/')
  }
  return (
    <div className="container mt-5">
      <h1>Hola, identifícate</h1>
      <hr />
      <button className="btn btn-primary" onClick={gestionarLogin}>Identificarse</button>
    </div>
  )
}