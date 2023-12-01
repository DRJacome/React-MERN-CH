import { autenticacionReducer } from "../../auth/autenticacionReducer";
import { types } from "../../types/types";


describe('Pruebas sobre autenticacionReducer', () => {

  /* Estado inicial:
  const state = {
  nombre: 'Fernando',
  logged: true
} */

  test('Debe retornar el estado por defecto', () => {
    const estado = autenticacionReducer({ logged: false }, {});

    expect(estado).toEqual({ logged: false });
  })

  test('Debe autenticar y colocar el nombre del usuario', () => {
    const action = {
      type: types.login,
      payload: {
        nombre: 'David'
      }
    }
    const estado = autenticacionReducer({ logged: true }, action);

    expect(estado).toEqual({
      logged: true,
      nombre: 'David'
    }
    );
  })

  test('Debe de borrar el nombre del usuario y cambiar el valor de logged a false', () => {
    const action = {
      type: types.logout
    }

    const estado = autenticacionReducer({ logged: true, nombre: 'Pedro' }, action);
    console.log(estado);

    expect(estado).toEqual({ logged: false });
  })
})