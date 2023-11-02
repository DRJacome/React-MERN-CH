import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch'

describe('Pruebas en useFectch', () => {
  test('Debe devolver la información por defecto (sincrónicamente): data null, loading true, error null.', () => {
    const { result } = renderHook(() => useFetch('https://www.boredapi.com/api/activity/?participants=1'))


    /* El useFetch('url') y la extracción de {data,loading,error} son síncronos, lo que
     * significa que essas líneas se ejecutarán antes de que el useFetch se resuelva. */
    const { data, loading, error } = result.current
    console.log(data, loading, error);

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(null).toBe(null);
  })

  test('Debe devolver la información obtenida de la API, loading false, error false.', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.boredapi.com/api/activity/?participants=1'))
    /* Con la función 'await waitForTheNextUpdate()' esperamos que el fetch traiga la información 
    de la url de la API. */
    await waitForNextUpdate()
    const { data, loading, error } = result.current

    console.log({ data });

    expect(data.participants).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  })

  test('Debe devolver el error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users?page=2'))
    await waitForNextUpdate()
    const { data, loading, error } = result.current

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('No se pudo obtener la información');
  })
})