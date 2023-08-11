/* 04: COMPONENTES, DIRECTORIO SRC, FRAGMENTS, PROPS, PROPTYPES, DEFAULTPROPS, EVENTOS, USESTATE */

import React, { useState } from 'react'
import PropTypes from 'prop-types'

function CounterApp({ value = 10 }) {

  const [counter, setCounter] = useState(value);


  const incrementar = () => {
    // ASIGNACIÓN DE VALOR CON USESTATE: 
    /* 1. */ setCounter(counter + 1);
    /* 2. */ //setCounter((c) => c + 1) 
  }

  /*   const reiniciar = () => {
      setCounter(value)
    }
  */
  const decrementar = () => {
    setCounter(counter - 1)
  }
  return (
    <div>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={incrementar}>+1</button>
      <button onClick={() => { setCounter(value) }}>Reset</button>
      <button onClick={decrementar}>-1</button>
    </div>
  )
}
CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp