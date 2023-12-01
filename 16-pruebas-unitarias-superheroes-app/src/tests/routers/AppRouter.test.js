import { mount } from "enzyme"
import { AppRouter } from "../../routers/AppRouter";
import { AutenticacionContext } from "../../auth/AutenticacionContext";

describe('Pruebas en <AppRouter/>', () => {

  const valorContext = {
    dispatch: jest.fn(),
    usuario: {
      logged: false
    }
  }

  test('Debe mostrar el login si no está autenticado', () => {

    const wrapper = mount(
      <AutenticacionContext.Provider value={valorContext}>
        <AppRouter />
      </AutenticacionContext.Provider>);

    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe mostrar el componente Marvel si está autenticado', () => {
    const valorContext = {
      dispatch: jest.fn(),
      usuario: {
        logged: true,
        nombre: 'David'
      }
    }

    const wrapper = mount(
      <AutenticacionContext.Provider value={valorContext}>
        <AppRouter />
      </AutenticacionContext.Provider>);

    console.log(wrapper.html());
    expect(wrapper.find('.navbar').exists()).toBe(true);
  })
})