import React from 'react'
import { shallow } from 'enzyme'
import { ListaTareas } from '../../../components/08-use-reducer/components/ListaTareas';
import { demoTareas } from '../../fixtures/demoTareas';

describe('Pruebas en <TodoList/>', () => {

  const gestionarBorrado = jest.fn()
  const gestionarTachado = jest.fn()

  const wrapper = shallow(
    <ListaTareas
      tareas={demoTareas}
      gestionarBorrado={gestionarBorrado}
      gestionarTachado={gestionarTachado}
    />);

  test('Debe mostrar el componente correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  })

  test('Debe tener dos componente <ListaTareasItem/>', () => {

    console.log(wrapper.find('ListaTareasItem').length);
    console.log(demoTareas.length);

    expect(wrapper.find('ListaTareasItem').length).toBe(demoTareas.length);

    console.log(wrapper.find('ListaTareasItem').at(0).prop('gestionarBorrado'))
    expect(wrapper.find('ListaTareasItem').at(0).prop('gestionarBorrado')).toEqual(expect.any(Function));
  })

})