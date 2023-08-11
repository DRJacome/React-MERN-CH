import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const PrimeraApp = ({ saludo, subtitulo }) => {

  /* 1.1 RENDERIZACIÓN DE OBJETOS */
  /*   const saludo = {
      nombre: 'David',
      edad: 33
    } */

  return (
    <>
      <h1>{saludo}!!!</h1>
      {/* 1.2 RENDERIZACIÓN DE OBJETOS */}
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>{subtitulo}</p>
    </>
  )
}

/* PROPTYPES */
PrimeraApp.propTypes = {
  //saludo: PropTypes.string
  saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtítulo'
}

export default PrimeraApp