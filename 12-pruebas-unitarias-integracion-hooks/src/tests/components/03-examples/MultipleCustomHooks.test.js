import React from 'react'
import { shallow } from 'enzyme'
import { MultipleCustomHooks } from "../../../components/03-ejemplos/MultipleCustomHooks"
import { useFetch } from '../../../hooks/useFetch'
import { useCounter } from '../../../hooks/useCounter'

jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks/>', () => {

  useCounter.mockReturnValue({
    counter: 10,
    incrementar: () => { }
  })

  test('Debe mostrarse correctamente', () => {

    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrar la información', () => {

    useFetch.mockReturnValue({
      data: {
        activity: 'Read a formal research paper on an interesting subject',
        type: 'Education'
      },
      loading: false,
      error: null
    })

    const wrapper = shallow(<MultipleCustomHooks />)

    expect(wrapper.find('alert').exists()).toBe(false);
    expect(wrapper.find('.mb-0').text().trim()).toBe('Read a formal research paper on an interesting subject');

    expect(wrapper.find('footer').text().trim()).toBe('Education');
    console.log(wrapper.html());
  })
})