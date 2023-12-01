import React from 'react'
import '@testing-library/jest-dom'
import { mount } from 'enzyme'
import { MemoryRouter, Router } from 'react-router-dom'
import { types } from '../../../types/types'
import { AutenticacionContext } from '../../../auth/AutenticacionContext'
import { Navbar } from '../../../components/ui/NavBar'


describe('Pruebas en <NavBar/>', () => {

  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn()
  }
  const valorContext = {
    dispatch: jest.fn(),
    usuario: {
      logged: true,
      nombre: 'David'
    }
  }
  const wrapper = mount(
    <AutenticacionContext.Provider value={valorContext}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AutenticacionContext.Provider>
  )

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Debe de mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('David');
  })

  test('Debe llamar el logout y usar el history', () => {

    wrapper.find('button').prop('onClick')();

    expect(valorContext.dispatch).toHaveBeenCalledWith({
      type: types.logout
    });

    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  })

})