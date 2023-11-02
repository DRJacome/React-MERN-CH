import React from 'react'
import { mount } from 'enzyme'
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { Contexto } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter/>', () => {

  const usuario = {
    id: 1,
    nombre: 'David'
  }

  const wrapper = mount(
    <Contexto.Provider value={{
      usuario
    }}>
      <AppRouter />
    </Contexto.Provider>
  );

  test('Debe mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  })
})