import React from 'react'
import { mount } from 'enzyme'
import { RutaPrivada } from '../../routers/RutaPrivada';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <RutaPrivada/>', () => {

  const props = {
    location: {
      pathname: '/marvel'
    }
  }

  Storage.prototype.setItem = jest.fn()

  test('Debe de mostrar el componente si está autenticado y guardar datos en localStorage', () => {
    const wrapper = mount(
      <MemoryRouter>
        <RutaPrivada
          isAutenticado={true}
          component={() => <span>Prueba de renderizado autenticado</span>}
          {...props}
        />
      </MemoryRouter>);

    console.log('========' + wrapper.html() + '==========');
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  })

  test('Debe bloquear el componente si no está autenticado', () => {
    const wrapper = mount(
      <MemoryRouter>
        <RutaPrivada
          isAutenticado={false}
          component={() => <span>Prueba de no renderizado sin autenticar</span>}
          {...props}
        />
      </MemoryRouter>
    )

    expect(wrapper.find('span').exists()).toBe(false);
  })
})