import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { VistaLogin } from '../../../components/login/VistaLogin'
import { AutenticacionContext } from '../../../auth/AutenticacionContext'
import { types } from '../../../types/types'

describe('Pruebas en <VistaLogin/>', () => {

  const historial = {
    replace: jest.fn(),
  }

  const valorContext = {
    dispatch: jest.fn(),
    usuario: {
      logged: false
    }
  }

  const wrapper = mount(
    <AutenticacionContext.Provider value={valorContext}>
      <VistaLogin history={historial} />
    </AutenticacionContext.Provider>
  );

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe realizar el dispatch y la navegación', () => {

    //wrapper.find('button').prop('onClick')()
    const manejarClick = wrapper.find('button').prop('onClick')

    manejarClick();
    expect(valorContext.dispatch).toHaveBeenCalledWith({
      type: types.login,
      payload: {
        nombre: 'David'
      }
    });

    //expect(historial.replace).toHaveBeenCalled();
    expect(historial.replace).toHaveBeenCalledWith("/");

    localStorage.setItem('lastPath', '/dc')
    manejarClick();
    expect(historial.replace).toHaveBeenCalledWith("/dc");

  })
})