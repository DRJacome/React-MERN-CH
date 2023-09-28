import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

/* Para testear custom hooks, debemos instalar una dependencia llamada "
React Hooks Testing Library" con el comando "npm install --save-dev @testing-library/react-hooks" e
importarla en el archivo de testing como "import { renderHook } from '@testing-library/react-hooks'".
Luego, en el test se debe usar como en el siguiente ejemplo:
"const { result } = renderHook(() => useFetchGifs('One Punch Man'))"
*/

describe('Pruebas sobre el hook <useFetchGifs/>', () => {
  test('Debe retornar el estado inicial', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch Man'))
    const { data, loading } = result.current;

    /*  const { data, loading } = useFetchGifs('One Punch Man') */
    console.log(data, loading);
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  })

  test('Debe retornar un array de imágenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch Man'));
    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBe(false);


  })
})