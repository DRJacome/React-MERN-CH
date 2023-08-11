/* import '@testing-library/jest-dom/extend-expect' */

/* IMPORTANTE: 
- Para los proyectos con versiones de React 16, usar Enzyme 16 (oficial):
  Instalar con "npm i --save-dev enzyme enzyme-adapter-react-16" e importar:
      import Enzyme from 'enzyme';
      import Adapter from 'enzyme-adapter-react-16';

      Enzyme.configure({ adapter: new Adapter() });

- Para los proyectos con versiones de React 17, usar Ezyme 17 (no oficial):
  Instalar con "npm install --save-dev @wojtekmaj/enzyme-adapter-react-17" e importar:
    import Enzyme from 'enzyme';
    import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

    Enzyme.configure({ adapter: new Adapter() });

- No hay soporte de Enzyme para React 18 por ahora.
*/

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

/* createSerializer sirve para comparar renderizados de estados de React (snapshots) */
import { createSerializer } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))