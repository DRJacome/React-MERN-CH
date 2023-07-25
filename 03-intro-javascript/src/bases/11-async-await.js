/* FUNCIONES ASÍNCRONAS: ASYNC - AWAIT */

// 1. Forma simple:
/* const getImagenPromesa = () =>
  new Promise(resolve => resolve('https//:abcd.com'))

getImagenPromesa().then(console.log) */

// 2. Forma correcta:
const getImagen = async () => {
  try {
    const apiKey = '0Eo9ye8o0uBl4iEVNwwEXYWytZqkdukm'
    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await respuesta.json()
    console.log(data)

    const { url } = data.images.original
    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.error(error)
  }

}

getImagen()