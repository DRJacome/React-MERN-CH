import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from "./GifGridItem"
//import { getGifs } from "../helpers/getGifs"

export const GifGrid = ({ categoria }) => {
  const { data: imagenes, loading } = useFetchGifs(categoria)

  /*   useEffect(() => {
      getGifs(categoria)
        .then(
        )
      /*  El segundo argumento del useEffect es llamado "Lista/array de dependencias []" y 
      * y objetivo es controlar cuándo se renderiza el componente. Si el array está vacío,
      * el componente sólo se renderizará por primera vez, evitando que se renderice continuamente.
      
    }, [categoria])
   */

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{categoria}</h3>
      {loading && <p className='carta animate__animated animate__flash'>Cargando</p>}
      {<div className="contenedorCartas">
        {imagenes.map(img => (
          <GifGridItem
            key={img.id}
            {...img}
          />
        ))}
      </div>}
    </>
  )
}

GifGrid.propTypes = {
  categoria: PropTypes.string.isRequired
}