import { types } from '../types/types';

/* Estado inicial:
  const state = {
  nombre: 'Fernando',
  logged: true
} */

/* El parámetro state está definido fuera del reducer y el parámetro action está desestructurado 
para acceder directamente al type desde el switch */
export const autenticacionReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      }
    case types.logout:
      return {
        logged: false
      }
    default:
      return state
  }
}
