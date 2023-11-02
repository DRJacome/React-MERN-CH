import React from 'react'
import { mount, shallow } from 'enzyme'
import { TareasApp } from '../../../components/08-use-reducer/TareasApp';
import { demoTareas } from '../../fixtures/demoTareas';
import { act } from '@testing-library/react'

describe('Pruebas en <TareasApp/>', () => {

  const wrapper = shallow(<TareasApp />);
  Storage.prototype.setItem = jest.fn(() => { })

  test('Debe renderizar el componente correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  })

  test('Debe agregar un componente <ListaTareas/>', () => {

    const wrapper = mount(<TareasApp />)

    act(() => {
      wrapper.find('AgregarTarea').prop('gestionarAgregarTarea')(demoTareas[0]);
      wrapper.find('AgregarTarea').prop('gestionarAgregarTarea')(demoTareas[1]);
    })

    expect(wrapper.find('h1').text().trim()).toBe('TareasApp (2)');
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  })

  test('Debe eliminar un <ListaTareas/>', () => {

    wrapper.find('AgregarTarea').prop('gestionarAgregarTarea')(demoTareas[0])
    expect(wrapper.find('h1').text().trim()).toBe('TareasApp (1)');

    wrapper.find('ListaTareas').prop('gestionarBorrado')(demoTareas[0].id)

    expect(wrapper.find('h1').text().trim()).toBe('TareasApp (0)');
  })
})
