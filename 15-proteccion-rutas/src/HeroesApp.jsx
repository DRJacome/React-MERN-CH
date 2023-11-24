import React, { useEffect, useReducer } from 'react'
import { AppRouter } from "./routers/AppRouter"
import { AutenticacionContext } from './auth/AutenticacionContext'
import { autenticacionReducer } from './auth/autenticacionReducer'

export const HeroesApp = () => {

  /* La constante revisionLocalStorage es una función que lee el localStorage para comprobar
  si hay algún usuario almacenado; si no existe, retorna el estado 'logged' en false*/
  const revisionLocalStorage = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }
  }

  const [usuario, dispatch] = useReducer(autenticacionReducer, {}, revisionLocalStorage)

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(usuario));
  }, [usuario])


  return (
    <AutenticacionContext.Provider value={{ usuario, dispatch }}>
      <AppRouter />
    </AutenticacionContext.Provider>
  )
}