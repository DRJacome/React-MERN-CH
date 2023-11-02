import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from "../../../components/03-ejemplos/MultipleCustomHooks"
import { EjemploRealUseRef } from '../../../components/04-useRef/EjemploRealUseRef'

describe('Pruebas en <EjemploRealUseRef/>', () => {

  const wrapper = shallow(<EjemploRealUseRef />);

  test('Debe mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(MultipleCustomHooks).exists()).toBe(false);
  })

  test('Debe mostrar el compontente <MultipleCustomHooks/>', () => {

    wrapper.find('button').simulate('click')

    expect(wrapper.find(MultipleCustomHooks).exists()).toBe(true);
  })
})