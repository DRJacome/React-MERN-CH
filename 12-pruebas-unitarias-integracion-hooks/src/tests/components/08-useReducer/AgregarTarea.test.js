import React from 'react'
import { shallow } from 'enzyme'
import { AgregarTarea } from '../../../components/08-use-reducer/components/AgregarTarea';

describe('Pruebas en <AgregarTarea/>', () => {

  const gestionarAgregarTarea = jest.fn();
  const wrapper = shallow(
    <AgregarTarea
      gestionarAgregarTarea={gestionarAgregarTarea}
    />
  );

  test('Debe mostrar el componente correctamente', () => {

    expect(wrapper).toMatchSnapshot();
  })

  test('No debe llamar a la frunción gestionarAgregarTarea()', () => {

    const enviarFormulario = wrapper.find('form').prop('onSubmit');

    enviarFormulario({ preventDefault() { } });

    console.log(enviarFormulario);

    expect(gestionarAgregarTarea).toHaveBeenCalledTimes(0);
  })

  test('Debe llamar a la función gestionarAgregarTarea()', () => {

    const valor = 'Aprender React'
    wrapper.find('input').simulate('change', {
      target: {
        value: valor,
        name: 'descripcion'
      }
    });

    const enviarFormulario = wrapper.find('form').prop('onSubmit');

    enviarFormulario({ preventDefault() { } })

    expect(gestionarAgregarTarea).toHaveBeenCalledTimes(1);
    expect(gestionarAgregarTarea).toHaveBeenCalledWith(expect.any(Object));
    expect(gestionarAgregarTarea).toHaveBeenCalledWith(
      {
        id: expect.any(Number),
        descripcion: valor,
        hecho: false
      });

    expect(wrapper.find('input').prop('value')).toBe('');
  })
})