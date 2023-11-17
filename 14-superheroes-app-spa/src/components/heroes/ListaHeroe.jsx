import React, { useMemo } from 'react'
import { getHeroesByEditora } from '../../selectors/getHeroesByEditora'
import { TarjetaHeroe } from './TarjetaHeroe'

export const ListaHeroe = ({ editora }) => {

  //OPTIMIZACIÓN: useMemo para evitar renderizar un componente (héroe) ya renderizado.
  /*   const heroes = getHeroesByEditora(editora) */
  const heroes = useMemo(() => getHeroesByEditora(editora), [editora])


  return (
    <div className='card-columns animate__animated animate__fadeIn'>
      {
        heroes.map(heroe => (
          <TarjetaHeroe
            key={heroe.id}
            {...heroe}
          />
        ))
      }
    </div>
  )
}