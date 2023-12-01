import React from 'react'
import { mount } from 'enzyme'
import { PanelRutas } from "../../routers/PanelRutas"
import { AutenticacionContext } from '../../auth/AutenticacionContext'
import { MemoryRouter } from 'react-router-dom/cjs/react-router-dom.min'

describe('Pruebas en <PanelRutas/>', () => {

  const valorContext = {
    dispatch: jest.fn(),
    usuario: {
      logged: true,
      nombre: 'David'
    }
  }
  test('Debe mostrar el componente correctamente', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AutenticacionContext.Provider value={valorContext}>
          <PanelRutas />
        </AutenticacionContext.Provider>
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('David');
  })
})