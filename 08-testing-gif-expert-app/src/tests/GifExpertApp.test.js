import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp'

describe('Pruebas sobre el componente <GifExpertApp/>', () => {

  test('Debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<GifExpertApp />)

    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrar una lista de categorías', () => {
    const categorias = ['One Punch Man', 'Kimetsu no Yaiba'];
    const wrapper = shallow(<GifExpertApp categoriaPorDefecto={categorias} />)

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categorias.length);
  })
})