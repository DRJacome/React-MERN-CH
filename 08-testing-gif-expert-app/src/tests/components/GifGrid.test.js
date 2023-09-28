import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import GifGrid from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')


describe('Pruebas sobre <GifGrid/>', () => {
  const categoria = 'One Punch Man'

  test('Debe mostrar el componente correctamente (snapshot)', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })

    const wrapper = shallow(<GifGrid categoria={categoria} />);
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrar items cuando se cargan imágenes de useFetchGifs', () => {
    const gifs = [{
      id: 'ABC',
      url: 'https://localhost/algo/algo.jpg',
      title: 'Cualquier cosa'
    },
    {
      id: '123',
      url: 'https://localhost/alguno/alguno.jpg',
      title: 'Cualquier item'
    }];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    const wrapper = shallow(<GifGrid categoria={categoria} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })
})