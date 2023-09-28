import React from 'react'
import { shallow } from 'enzyme'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas sobre <GifGridItem/>', () => {

  const title = 'Un título'
  const url = 'https://localhost/algo.jpg'

  /* Test renderizando el componente y sus propiedades. */
  const wrapper = shallow(<GifGridItem title={title} url={url} />)

  test('Debe mostrar el componente correctamente', () => {
    /* Test renderizando solo el componente. */
    const wrapper = shallow(<GifGridItem />)

    expect(wrapper).toMatchSnapshot()
  })

  test('Debe recibir las propiedades "title" y "url"', () => {

    expect(wrapper).toMatchSnapshot();
  })

  test('Debe obtener la imagen y el alt de los props', () => {
    const img = wrapper.find('img')
    console.log(img.prop('src'));

    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  })

  test('Debe tener un párrafo con la propiedad "title"', () => {
    const p = wrapper.find('p')
    console.log(p.text());

    expect(p.text().trim()).toBe(title);
  })

  test('Debe tener la clase CSS animate__fadeIn', () => {
    const div = wrapper.find('div')
    const className = div.prop('className')
    console.log(div.prop('className'))


    expect(className.includes('animate__fadeIn')).toBe(true);
  })
})