import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { VistaLogin } from "../components/login/VistaLogin";
import { PanelRutas } from "./PanelRutas";
import { RutaPrivada } from "./RutaPrivada";
import { RutaPublica } from "./RutaPublica";
import { AutenticacionContext } from "../auth/AutenticacionContext";

export const AppRouter = () => {
  const { usuario } = useContext(AutenticacionContext)
  console.log(usuario);

  return (
    <Router>
      <div>
        <Switch>
          {/* Rutas públicas */}
          <RutaPublica
            exact path='/login'
            component={VistaLogin}
            isAutenticado={usuario.logged}
          />

          {/* Rutas privadas */}
          <RutaPrivada
            path='/'
            component={PanelRutas}
            isAutenticado={usuario.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}