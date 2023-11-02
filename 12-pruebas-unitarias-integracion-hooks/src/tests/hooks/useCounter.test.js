import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Pruebas en useCounter.js', () => {
  test('Debe devolver los valores por defecto', () => {
    const { result } = renderHook(() => useCounter())

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.reset).toBe('function');
    expect(typeof result.current.incrementar).toBe('function');
    expect(typeof result.current.decrementar).toBe('function');
  })

  test('Debe devolver el valor counter en 100', () => {
    const { result } = renderHook(() => useCounter(100))

    expect(result.current.counter).toBe(100);
  })

  test('Debe incrementar el valor de counter en 1', () => {
    const { result } = renderHook(() => useCounter(100))
    const { incrementar } = result.current

    act(() => {
      incrementar()
    })

    const { counter } = result.current
    expect(counter).toBe(101);
  })

  test('Debe decrementar el valor de counter en 1', () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrementar } = result.current

    act(() => {
      decrementar()
    })

    const { counter } = result.current
    expect(counter).toBe(99);
  })

  test('Debe devolver el valor counter al estado inicial', () => {
    const { result } = renderHook(() => useCounter(10))
    const { decrementar, reset } = result.current

    act(() => {
      decrementar()
      reset()
    })

    const { counter } = result.current
    expect(counter).toBe(10);
  })
})
