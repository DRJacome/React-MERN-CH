import React from 'react'
import { Navbar } from "../components/ui/NavBar"
import { Route, Switch, Redirect } from "react-router-dom"
import { VistaMarvel } from '../components/marvel/VistaMarvel'
import { VistaHeroe } from '../components/heroes/VistaHeroe'
import { VistaDC } from '../components/cd/VistaDC'
import { VistaBusqueda } from '../busqueda/VistaBusqueda'

export const PanelRutas = () => {
  return (
    <>
      <Navbar />
      <div className='contanier mt-2 ml-5'>
        <Switch>
          <Route exact path='/marvel' component={VistaMarvel} />
          <Route exact path='/heroe/:heroeId' component={VistaHeroe} />
          <Route exact path='/dc' component={VistaDC} />
          <Route exact path='/busqueda' component={VistaBusqueda} />

          <Redirect to='/marvel' />
        </Switch>
      </div>
    </>
  )
}