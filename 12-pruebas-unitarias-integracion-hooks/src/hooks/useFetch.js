import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
  const isMounted = useRef(true)
  const [estado, setEstado] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setEstado({ data: null, loading: true, error: null })
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(data => {
        if (isMounted) {
          setTimeout(() => {
            setEstado({
              loading: false,
              error: null,
              data
            });
          }, 100);
        } else {
          console.log('setState() no se llamó');
        }
      })
      .catch(error => {
        setEstado({
          data: null,
          loading: false,
          error: "No se pudo obtener la información"
        })
      });
  }, [url])

  return estado;
}
