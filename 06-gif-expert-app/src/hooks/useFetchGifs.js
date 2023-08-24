/* CUSTOM HOOKS */

import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (categoria) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  /* NOTA: Los efectos no pueden ser asíncronos porque siempre esperan algo síncrono. */
  useEffect(() => {
    getGifs(categoria)
      .then(imgs => {

        console.log(imgs);
        setState({
          data: imgs,
          loading: false
        })

      })
  }, [categoria])

  return state // retorna como estado inicial {data: [], loading: true}.
}
