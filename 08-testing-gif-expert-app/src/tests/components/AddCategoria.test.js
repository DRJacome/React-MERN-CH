import React from 'react'
import { shallow } from 'enzyme'
import { AddCategoria } from '../../components/AddCategoria';
import '@testing-library/jest-dom'

describe('Pruebas en <AddCategoria />', () => {

  /* "jest.fn()" es una función de Jest que permite crear funciones simuladas en 
  * entornos de prueba. Un "mock" es un objeto simulado que imita el comportamiento del
  * objeto real con el que se quiere realizar una prueba en un entorno controlado de 
  * pruebas unitarias sin que afecte al objeto real.
  * 
  * Se puede utilizar para que Jest sepa si se ha llamado a la función objetivo,
  * cuántas veces se ha llamado, y con qué argumentos, para comprobar si dicha función
  * se comporta según lo esperado o no.
  */
  const setCategorias = jest.fn();
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategoria setCategorias={setCategorias} />);
  }
  )

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input')
    const value = "Hola mundo"

    input.simulate('change', {
      target: { value }
    })

    expect(wrapper.find('p').text().trim()).toBe(value)
  })

  test('No debe postear la información con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() { } })
    expect(setCategorias).not.toHaveBeenCalled();
  })

  test('Debe de llamar el "setCategorias" y limpiar la caja de texto', () => {

    // Tareas:
    // 1. Simular el inputChange.
    const value = "Hola mundo 2";
    wrapper.find('input').simulate('change', { target: { value } });

    // 2. Simular el submit.
    wrapper.find('form').simulate('submit', { preventDefault() { } });

    // 3. "setCategorias" se debe de haber llamado.
    expect(setCategorias).toHaveBeenCalled();
    /* expect(setCategorias).toHaveBeenCalledTimes(2); */
    /* expect(setCategorias).toHaveBeenCalledWith(expect.any(Function)); */

    // 4. El valor del input debe de estar como un string vacío ('').
    expect(wrapper.find('input').prop('value')).toBe('');
  })
})