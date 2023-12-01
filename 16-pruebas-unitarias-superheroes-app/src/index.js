/* NOTA:
* Añadir al package.json: 
    "@testing-library/react": "^12.1.1",
    "@testing-library/user-event": "^12.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",

* Instalar npm i react-router-dom@5.3.0
Añadir Bootstrap v4.6 en public/index.html (<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">)
* Añadir Animate.css (<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
* Instalar npm i query-string
  />)

 NOTAS para pruebas unitarias y de integración-> Instalar (para React v17 y Enzyme):
* 1. npm i react-router-dom
* 2. npm install --save-dev jest
* 3. npm install --legacy-peer-deps --save-dev @wojtekmaj/enzyme-adapter-react-17
* 4. npm install --save-dev enzyme
* 5. npm install --save-dev enzyme-to-json
* 6. npm install --save-dev @testing-library/react-hooks
* 7. npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps
* 8. Crear archivo "setupTests.js" en directorio 'src' y pegar lo siguiente:
        import Enzyme from 'enzyme'
        import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
        import { createSerializer } from 'enzyme-to-json'

        Enzyme.configure({ adapter: new Adapter() });
        expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';


/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HeroesApp />
); */

ReactDOM.render(
    <HeroesApp />,
    document.getElementById('root')
);
