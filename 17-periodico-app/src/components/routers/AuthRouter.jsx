import React from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { PantallaLogin } from '../auth/PantallaLogin'
import { PantallaRegistro } from '../auth/PantallaRegistro'


export const AuthRouter = () => {
  return (
    <div className='auth__main'>
      <div className='auth__box-container'>

      <Switch>
        <Route path='/auth/login' component={PantallaLogin} />
        <Route path='/auth/register' component={PantallaRegistro} />
        <Redirect to='/auth/login' />
      </Switch>
      </div>
    </div>
  )
}