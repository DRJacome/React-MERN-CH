import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con GetGifs Fetch', () => {
  test('Debe traer 10 elementos', async () => {

    const gifs = await getGifs('One Punch')
    console.log(gifs);

    expect(gifs.length).toBe(10);
  })

  test('No debe traer 10 elementos', async () => {

    const gifs = await getGifs('')
    console.log(gifs);

    expect(gifs.length).toBe(0);
  })
})