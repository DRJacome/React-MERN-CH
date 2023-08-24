export const getGifs = async (categoria) => {
  const url = `api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=0Eo9ye8o0uBl4iEVNwwEXYWytZqkdukm`
  const respuesta = await fetch(`https://${url}`)
  const { data } = await respuesta.json()

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })


  return gifs
}