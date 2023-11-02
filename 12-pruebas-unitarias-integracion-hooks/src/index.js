/* NOTAS. Instalar: 
* 1. npm i react-router-dom
* 2. npm install --save-dev jest
* 3. npm install --legacy-peer-deps --save-dev @wojtekmaj/enzyme-adapter-react-17
* 4. npm install --save-dev enzyme
* 5. npm install --save-dev enzyme-to-json
* 6. npm install --save-dev @testing-library/react-hooks
 */

import React from 'react';
import ReactDOM from 'react-dom';
/* import { MainApp } from './components/09-useContext/MainApp'; */
/* import { TareasApp } from './components/08-use-reducer/TareasApp'; */
/* import { Padre } from './components/07-tarea-memo/Padre'; */
/* import { CallbackHook } from './components/06-memos/CallbackHook'; */
/* import { MemoHook } from './components/06-memos/MemoHook'; */
/* import { Memorize } from './components/06-memos/Memorize'; */
/* import { Layout } from './components/05-useLaoyutEffect/LayoutEffect'; */
/* import { EjemploRealUseRef } from './components/04-useRef/EjemploRealUseRef'; */
/* import { FocusScreen } from './components/03-useRef/FocusScreen'; */
import { MultipleCustomHooks } from './components/03-ejemplos/MultipleCustomHooks';
/* import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'; */
/* import { SimpleForm } from './components/02-useEffect/SimpleForm'; */
/* import { CounterApp } from './components/01-useState/CounterApp'; */
/* import { HookApp } from './HookApp';  */
/* import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'; */
/* import './components/01-useState/counter.css'  */
/* import './components/08-use-reducer/Intro-reducer' */


ReactDOM.render(
  <MultipleCustomHooks />,
  document.getElementById('root')
);

