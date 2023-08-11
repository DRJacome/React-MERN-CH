/* FUNCIONES ASÍNCRONAS: ASYNC - AWAIT */

// 1. Forma simple:
/* const getImagenPromesa = () =>
  new Promise(resolve => resolve('https//:abcd.com'))

getImagenPromesa().then(console.log) */

// 2. Forma correcta:
export const getImagen = async () => {
  try {
    const apiKey = '0Eo9ye8o0uBl4iEVNwwEXYWytZqkdukm'
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await respuesta.json()

    const { url } = data.images.original

    return url;

  } catch (error) {
    // Manejo del error
    return 'No existe'
  }

}

getImagen()