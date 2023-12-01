import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { TarjetaHeroe } from '../heroes/TarjetaHeroe';
import { useForm } from '../../hooks/useForm';
import { getHeroesByNombre } from '../../selectors/getHeroesByNombre';
import queryString from 'query-string'

export const VistaBusqueda = ({ history }) => {

  const location = useLocation()
  const { q = '' } = queryString.parse(location.search);

  const formularioInicial = {
/*     textoBusqueda: q
 */  }
  const [valores, gestionarInput] = useForm(formularioInicial)
  const { textoBusqueda } = valores

  const filtradoHeroes = useMemo(() => getHeroesByNombre(q), [q])

  const manejarFormulario = (evento) => {
    evento.preventDefault();
    history.push(`?q=${textoBusqueda}`)
  }

  return (
    <div>
      <h1>Búsqueda de super héroes</h1>
      <hr />

      <div className='row'>
        <div className='col-5 animate__animated animate__fadeInLeft'>
          <h4>Formulario:</h4>
          <hr />
          <form onSubmit={manejarFormulario}>
            <input
              type='text'
              placeholder='Escriba el nombre de un héroe'
              className='form-control m-1'
              name='textoBusqueda'
              autoComplete='off'
              value={textoBusqueda}
              onChange={gestionarInput}
            />
            <button
              type='submit'
              className='btn m-1 btn-block btn-outline-primary'
            >Buscar
            </button>
          </form>
        </div>
        <div className='col-7 animate__animated animate__fadeInRight'>

          {/*           {
            (q === '')
            && (
              <div className='alert alert-info mt-5'>
                <p className='text-center pt-2'>Tu búsqueda aparecerá aquí</p>
              </div>)
          } */
          }
          {
            (q !== '' && filtradoHeroes.length === 0)
            && (<div className='alert alert-info mt-5'>
              <p className='text-center pt-2'>No hay ningún superhéroe llamado {q}; prueba con otra búsqueda.</p>
            </div>)
          }
          {
            filtradoHeroes.map(
              heroe => (
                <div key={heroe.id}>
                  <h4>Resultados:</h4>
                  <hr />
                  <TarjetaHeroe

                    {...heroe}
                  />
                </div>
              ))
          }
        </div>
      </div>
    </div>
  )
}