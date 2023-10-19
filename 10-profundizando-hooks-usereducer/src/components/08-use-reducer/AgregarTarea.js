import React from 'react'
import { useForm } from "../../hooks/useForm"

export const AgregarTarea = ({ gestionarAgregarTarea }) => {
  /* const [{valoresFormulario}, gestionarInput] = useForm({ */
  const [{ descripcion }, gestionarInput, reset] = useForm({
    descripcion: ''
  })

  const gestionarFormulario = (evento) => {
    evento.preventDefault();
    /* Si no se escribe nada en el campo input, 
    el programa no hará nada (no añadirá una nueva tarea) */
    if (descripcion.trim().length <= 1) {
      return null;
    }

    const nuevaTarea = {
      id: new Date().getTime(),
      descripcion: descripcion,
      hecho: false
    }

    gestionarAgregarTarea(nuevaTarea)
    reset()
  }

  return (
    <>
      <h4>Agregar tarea</h4>
      <hr />
      <form onSubmit={gestionarFormulario}>
        <input
          type='text'
          name='descripcion'
          className='form-control'
          placeholder='Aprender...'
          autoComplete='off'
          onChange={gestionarInput}
          value={descripcion}
        />
        <button
          className='btn btn-outline-primary mt-1 btn-block'
          type='submit'
        >Agregar
        </button>
      </form>
    </>
  )
}