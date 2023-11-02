import React from 'react'
import { mount } from 'enzyme'
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { Contexto } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen/>', () => {

  const usuario = {
    nombre: 'David',
    email: 'david@gmail.com'
  }
  const wrapper = mount(
    <Contexto.Provider value={{
      usuario
    }}>
      <HomeScreen />
    </Contexto.Provider>
  );

  test('Debe renderizarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  })
})