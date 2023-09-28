/* PRUEBAS UNITARIAS CON JEST Y ENZIME. USAR REACT v17 
* Para seleccionar otra versión de React (v17), buscar en el package.json estas líneas:
"@testing-library/react": "^12.1.1",
"@testing-library/user-event": "^12.5.0",
"react": "^17.0.2",
"react-dom": "^17.0.2"

sustituirlas por la versión deseada. Por último, borrar la carpeta "node_modules"
* y volver a instalar las dependencias con "npm i".
*/

import React from 'react'
/* Añadir import '@testing-library/jest-dom'*/
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import PrimeraApp from "../PrimeraApp"
/* IMPORTANTE: configurar el archivo setupTests con el testing de Enzyme para React. */
import '../setupTests';

describe('Pruebas en <PrimeraApp/>', () => {
  /* test('Debe mostrar el mensaje "Hola, soy David"', () => {
    const saludo = "Hola, soy David"

    const { getByText } = render(<PrimeraApp saludo={saludo} />);
    expect(getByText(saludo)).toBeInTheDocument();
  }) */

  test('Debe mostrar <PrimeraApp/> correctamente', () => {
    const saludo = "Hola, soy David"
    const wrapper = shallow(<PrimeraApp saludo={saludo} />)

    /* El método toMatchSnapshot() sirve para comparar renderizados de estados React */
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe mostrar el subtítulo enviado por props', () => {

    const saludo = "Hola, soy David"
    const subTitulo = "Soy un subtítulo"
    const wrapper = shallow(
      <PrimeraApp
        saludo={saludo}
        subtitulo={subTitulo}
      />
    );

    /* Forma de hacer pruebas con elementos del DOM */
    const textoParrafo = wrapper.find('p').text()
    console.log(textoParrafo);

    expect(textoParrafo).toBe(subTitulo);
  })

  test('Debe mostrar el componente <CounterApp/> con sus valores por defecto', () => {

  })
})