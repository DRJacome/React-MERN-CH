import React from 'react'
import { shallow } from 'enzyme'
import { ListaTareasItem } from '../../../components/08-use-reducer/components/ListaTareasItem';
import { demoTareas } from '../../fixtures/demoTareas'

describe('Pruebas en <ListaTareasItem/>', () => {
  const gestionarBorrado = jest.fn()
  const gestionarTachado = jest.fn()

  const wrapper = shallow(
    <ListaTareasItem
      tarea={demoTareas[0]}
      index={0}
      gestionarBorrado={gestionarBorrado}
      gestionarTachado={gestionarTachado}
    />
  );
  test('Debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe llamar la función gestionarBorrado', () => {
    /* jest.fn()
    * toHaveBeenCalled
    * toHaveBeenCalledWith
     */

    wrapper.find('button').simulate('click')
    expect(gestionarBorrado).toHaveBeenCalledWith(demoTareas[0].id);
  })
  test('Debe llamar la función gestionarTachado', () => {
    /* jest.fn()
    * toHaveBeenCalled
    * toHaveBeenCalledWith
     */

    wrapper.find('p').simulate('click')
    expect(gestionarTachado).toHaveBeenCalledWith(demoTareas[0].id);
  })

  test('Debe mostrar el texto correctamente', () => {
    // Contenido del párrafo
    const texto = wrapper.find('p')

    expect(texto.text().trim()).toBe(`1 - ${demoTareas[0].descripcion}`);
  })
  test('Debe tener la clase ".completada" si tarea.hecho es true', () => {

    const tarea = demoTareas[0]
    tarea.hecho = true

    const wrapper = shallow(<ListaTareasItem tarea={tarea} />)
    console.log(wrapper.html());

    expect(wrapper.find('p').hasClass('completada')).toBe(true);
  })
})