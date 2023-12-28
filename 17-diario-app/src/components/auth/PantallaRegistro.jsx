import React from 'react'
import { Link } from "react-router-dom"


export const PantallaRegistro = () => {
  return (
    <>
      <h3 className="auth__title">Registro</h3>
      <form>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          name="confirmarPassword"
          className="auth__input"
        />
        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          disabled={true}
        >
          Registrarse
        </button>
        <hr />
        
          <Link to='/auth/login' className="link">¿Ya estás registrado?</Link>
      </form>
    </>
  )
}