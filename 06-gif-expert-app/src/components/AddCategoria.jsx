import React, { useState } from 'react'
import PropTypes from "prop-types";

/* Como parámetro se envía desestructurada la propiedad "{setCategorias}" para 
 * establecer comunicación entre el padre "GifExpertApp" y el hijo "AddCategoria"
*/
const AddCategoria = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length > 2) {
      setCategorias(cat => [inputValue, ...cat])
      setInputValue('')
    }

    //console.log('Submit hecho');
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>{inputValue}</h1>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

/* PropTypes se usa para establecer reglas de requerimientos para la aplicación.
 * En este caso se usa "setCategorias: PropTypes.func.isRequired" para marcar una
 * regla que requiera que la función "setCaterorias" debe ser enviada desde 
 * el padre "GifExpertApp".
 */
AddCategoria.propTypes = {
  setCategorias: PropTypes.func
  /* setCategorias: PropTypes.func.isRequired */
}

export default AddCategoria