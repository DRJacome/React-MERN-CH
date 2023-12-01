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
  />)
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
