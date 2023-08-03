import React, { useState } from 'react'
import PropTypes from 'prop-types'

function CounterApp({ value = 10 }) {

  const [counter, setCounter] = useState(value);


  const handleAdd = () => {
    // ASIGNACIÓN DE VALOR CON USESTATE: 
    /* 1. */ setCounter(counter + 1);
    /* 2. */ //setCounter((c) => c + 1) 
  }
  
/*   const reiniciar = () => {
    setCounter(value)
  }

  const decrementar = () => {
    setCounter(counter - 1)
  } */
  return (
    <div>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={() => { setCounter(value) }}>Reset</button>
      <button onClick={() => { setCounter(counter - 1) }}>-1</button>
    </div>
  )
}
CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp