import React from 'react'
import { mount } from 'enzyme'
import { VistaHeroe } from '../../../components/heroes/VistaHeroe'
import { MemoryRouter, Route } from 'react-router-dom'


describe('Pruebas en <VistaHeroe/>', () => {

  const historialMock = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn()
  }

  test('Debe mostrar el componente Redirect si no hay argumentos en el URL', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <VistaHeroe history={historialMock} />
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBe(true);
  })

  test('Debe mostrar un héroe si el parámetro existe y se encuentra', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route path='/heroe/:heroeId' component={VistaHeroe} />
      </MemoryRouter>

    );
    expect(wrapper.find('.row').exists()).toBe(true)
  })

  test('Debe regresar a la pantalla anteior con PUSH', () => {
    const historialMockLocal = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route
          path='/heroe/:heroeId'
          component={(props) => <VistaHeroe history={historialMockLocal} />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')()

    expect(historialMockLocal.push).toHaveBeenCalledWith('/');

    /* Las siguiente dos instrucciones son equivalentes. */
    expect(historialMockLocal.goBack).not.toHaveBeenCalled();
    expect(historialMockLocal.goBack).toHaveBeenCalledTimes(0);
  })

  test('Debe regresar a la pantalla anterior GOBACK', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route
          path='/heroe/:heroeId'
          component={(props) => <VistaHeroe history={historialMock} />}
        />
      </MemoryRouter>
    );

    wrapper.find('button').prop('onClick')()

    expect(historialMock.push).toHaveBeenCalledTimes(0);
    expect(historialMock.goBack).toHaveBeenCalled();
  })

  test('Debe llamar al Redirect si el héroe no existe', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider23143214324']}>
        <Route
          path='/heroe/:heroeId'
          component={(props) => <VistaHeroe history={historialMock} />}
        />
      </MemoryRouter>
    );

    console.log(wrapper.text());
    expect(wrapper.text()).toBe('');
  })
})