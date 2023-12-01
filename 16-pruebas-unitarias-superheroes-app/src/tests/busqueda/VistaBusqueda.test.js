import React from 'react'
import { mount } from 'enzyme'
import { VistaBusqueda } from '../../components/busqueda/VistaBusqueda';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <VistaBusqueda/>', () => {

  test('Debe mostrar el componente correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initianEntries={['/search']}>
        <Route path="/search" component={VistaBusqueda} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Tu búsqueda aparecerá aquí');
  })

  test('Debe mostrar "batman" y el input con el valor del queryString', () => {
    const wrapper = mount(
      <MemoryRouter initianEntries={['/search?=batman']}>
        <Route path="/search" component={VistaBusqueda} />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrar un error si no se encuentra el héroe', () => {
    const wrapper = mount(
      <MemoryRouter initianEntries={['/search?=batman123']}>
        <Route path="/search" component={VistaBusqueda} />
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay ningún superhéroe llamado batman123; prueba con otra búsqueda.');
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe llamar el push del history', () => {
    const historial = {
      push: jest.fn()
    }

    const wrapper = mount(
      <MemoryRouter initianEntries={['/search?=batman123']}>
        <Route path="/search" component={() => <VistaBusqueda history={historial} />} />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'textoBusqueda',
        value: 'batman'
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault() { }
    });

    expect(historial.push).toHaveBeenCalledWith('?q=batman');
  })
})