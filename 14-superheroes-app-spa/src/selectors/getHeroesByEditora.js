import { heroes } from "../data/heroes";

export const getHeroesByEditora = (editora) => {
  const editorasValidas = ['DC Comics', 'Marvel Comics']

  /* Control de entrada de datos: editora */
  if (!editorasValidas.includes(editora)) {
    throw new Error(`La editora ${editora} no es correcta.`)
  }

  return heroes.filter(heroe => heroe.publisher === editora)
}