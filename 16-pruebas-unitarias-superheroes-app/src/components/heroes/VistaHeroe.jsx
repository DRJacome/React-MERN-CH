import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroesById';

export const VistaHeroe = ({ history }) => {

  /* Con usePArams podemos leer argumentos mediante la URL (/heroe/:heroeId) */
  const { heroeId } = useParams();

  //OPTIMIZACIÓN: useMemo para evitar renderizar un componente (héroe) ya renderizado.
  /*   const heroe = getHeroById(heroeId) */
  const heroe = useMemo(() => getHeroById(heroeId), [heroeId])

  if (!heroe) {
    return <Redirect to='/' />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters } = heroe;

  const manejarVolverAtras = () => {
    if (history.length <= 2) {
      history.push('/')
    } else {
      history.goBack();
    }
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush animate__animated animate__fadeInRight'>
          <li className='list-group-item'><b>Alter ego más conocido: </b>{alter_ego}.</li>
          <li className='list-group-item'><b>Editora: </b>{publisher}.</li>
          <li className='list-group-item'><b>Primera aparición: </b>{first_appearance}.</li>
          <li className='list-group-item'><b>Personas que han sido el héroe: </b>{characters}.</li>
        </ul>
        <button className='btn btn-outline-info mt-2 animate__animated animate__fadeInUp' onClick={manejarVolverAtras}>Atrás</button>
      </div>
    </div>
  )
}