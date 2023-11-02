import React from 'react'
import { useForm } from '../../hooks/useForm'
import { renderHook, act } from '@testing-library/react-hooks'

describe('Pruebas en useForm', () => {
  const formularioInicial = {
    nombre: 'David',
    email: 'david@mail.com'
  }

  // 1. 
  test('Debe devolver un formulario por defecto', () => {
    /* Renderizamos el componente con renderHook y le enviamos como argumento el formularioInicial
    * y extraemos el result del mismo. */
    const { result } = renderHook(() => useForm(formularioInicial))
    /* Comprobamos que el formulario nos devuelve lo que devuelve el componente usando
    * el array del return del componente useFom ([valoresFormulario, funciones]);
    esto lo extraemos del result.current. */
    const [valoresFormulario, gestionarInput, reset] = result.current

    /* Testeamos que lo que nos devuelve es lo esperado o no; al ser un objeto samos "toEqual".
    * Fórmula -> expect(<<valorRecibido>>).toEqual(<<valorEsperado>>);
    */
    expect(valoresFormulario).toEqual(formularioInicial);
    expect(typeof gestionarInput).toBe('function');
    expect(typeof reset).toBe('function');
  })

  // 2.
  test('Debe de cambiar el valor del formulario (cambiar nombre)', () => {
    const { result } = renderHook(() => useForm(formularioInicial))
    /* En la desestructuración de un array, se puede acceder a una posición en concreto dejando
    * vacíos los espacios que no interesen y nombrando el calor del que sí interesa.
    const [noInteresa, gestionarInput];
     */
    const [, gestionarInput] = result.current
    act(() => {
      /* La función "gestionarInput()" recibe como parámetro un argumento que simula el evento (target)
      * que dispara la función; en este argumento le pasamos el nuevo valor de la propiedad 'nombre'.
      * OJO: si pasamos una propiedad que no se encuentra en el objeto inicial, se añadirá como 
      * una nueva propiedad sin modificar la otra propiedad y sin avisar del cambio.
      */
      gestionarInput({
        target: {
          name: 'nombre',
          value: 'Pedro'
        }
      })
    })

    const [valoresFormulario] = result.current
    /* Comprobamos sólo el valor de la propiedad 'nombre'....*/
    expect(valoresFormulario.nombre).toBe('Pedro');
    /* .... o comprobamos que de todo el objeto 'formularioInicial, 
    la propiedad 'nombre' se ha modificado sin que las ortas propiedades hayan cambiado.*/
    expect(valoresFormulario).toEqual({ ...formularioInicial, nombre: 'Pedro' });
  })

  //3.
  test('Debe restablecer el formulario con RESET', () => {
    const { result } = renderHook(() => useForm(formularioInicial))
    const [, gestionarInput, reset] = result.current
    const [valoresFormulario] = result.current

    act(() => {
      gestionarInput({
        target: {
          name: 'nombre',
          value: 'Pedro'
        }
      });
      reset()
    })

    console.log(valoresFormulario);
    expect(valoresFormulario).toEqual(formularioInicial);
  })
})