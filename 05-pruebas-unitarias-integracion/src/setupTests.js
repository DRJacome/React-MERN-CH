/* import '@testing-library/jest-dom/extend-expect' */

/* IMPORTANTE:
-> Se debe crear un archivo "setupTests.js" en la carpeta "src" donde copiar una de las
 tres siguientes opciones:

1-> Para los proyectos con versiones de React 16, usar Enzyme 16 (oficial):
  Instalar con "npm i --save-dev enzyme enzyme-adapter-react-16" e importar:
      import Enzyme from 'enzyme';
      import Adapter from 'enzyme-adapter-react-16';

      Enzyme.configure({ adapter: new Adapter() });

2-> Para los proyectos con versiones de React 17, usar Ezyme 17 (no oficial):
  (IMPORTANTE: ESTAS DEPENDENCIAS HAN DE INSTALARSE COMO DEPENDENCIAS DE DESARROLLADOR CON "--save-dev")
  (IMPORTANTE: SE DEBE EXPORTAR LA/S FUNCION/ES QUE SE QUIERAN TESTEAR CON "export" EN EL ARCHIVO CORRESPONDIENTE)

  2.1 Instalar con "npm install --save-dev @wojtekmaj/enzyme-adapter-react-17" y 
  "npm install --save-dev enzyme-to-json" e importar:
    import Enzyme from 'enzyme';
    import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
    import { createSerializer } from 'enzyme-to-json'

    Enzyme.configure({ adapter: new Adapter() });
    expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

  2.2. PRUEBAS UNITARIAS CON JEST Y ENZIME --> USAR REACT v17 
    Para seleccionar otra versión de React (v17), buscar en el package.json estas líneas:
    "@testing-library/react": "^12.1.1",
    "@testing-library/user-event": "^12.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2"

  2.3 En el archivo "index.js" usar esta función: 
        "ReactDOM.render(<NombreApp />, document.getElementById('root'))" 
      e importar:
        import React from 'react';
        import ReactDOM from 'react-dom';

  2.4 Por último, borrar la carpeta "node_modules" y volver a instalar las dependencias 
  con "npm i".

3-> No hay soporte de Enzyme para React 18 por ahora.
*/

// Para usar Enzyme, comentar "import '@testing-library/jest-dom';"
// y copiar y pegar las líneas coloreadas de abajo:
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// createSerializer sirve para comparar renderizados de estados de React (snapshots)
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))