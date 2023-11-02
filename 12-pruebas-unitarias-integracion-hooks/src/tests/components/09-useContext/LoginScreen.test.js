import React from 'react'
import { mount } from 'enzyme'
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { Contexto } from '../../../components/09-useContext/UserContext';

describe('Pruebas sobre <LoginScreen/>', () => {

  const setUsuario = jest.fn()

  const wrapper = mount(
    <Contexto.Provider value={{
      setUsuario
    }}>
      <LoginScreen />
    </Contexto.Provider>
  );

  test('Debe mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  })

  test('Debe ejecutar el setUser con el argumento esperado', () => {

    wrapper.find('button').prop('onClick')();

    expect(setUsuario).toHaveBeenCalledWith({
      id: 123,
      nombre: 'David'
    });
  })
})