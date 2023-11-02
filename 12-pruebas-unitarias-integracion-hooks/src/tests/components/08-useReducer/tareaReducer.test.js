import React from 'react'
import { shallow } from 'enzyme'
import { tareaReducer } from '../../../components/08-use-reducer/tareaReducer'
import { demoTareas } from '../../fixtures/demoTareas'

describe('Pruebas en TareaReducer', () => {

  test('Debe retornar el estado por defecto', () => {

    const state = tareaReducer(demoTareas, {})
    expect(state).toEqual(demoTareas);
  })

  test('Debe agregar una tarea', () => {

    const nuevaTarea = {
      id: 3,
      descripcion: 'Aprender Express',
      hecho: false
    }

    const accionAgregar = {
      type: 'agregar',
      payload: nuevaTarea
    }

    const state = tareaReducer(demoTareas, accionAgregar)
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTareas, nuevaTarea]);
  })

  test('Debe borrar una tarea', () => {
    const accionBorrar = {
      type: 'borrar',
      payload: 1
    }

    const state = tareaReducer(demoTareas, accionBorrar)
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTareas[1]]);
  })

  test('Debe tachar la tarea', () => {

    const accionTachar = {
      type: 'tachar',
      payload: 1
    }

    const state = tareaReducer(demoTareas, accionTachar)
    expect(state[0].hecho).toBe(true);
    expect(state[1]).toEqual(demoTareas[1]);
  })
})