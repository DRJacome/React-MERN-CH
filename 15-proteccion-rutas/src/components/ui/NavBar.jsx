import { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AutenticacionContext } from '../../auth/AutenticacionContext';
import { types } from '../../types/types';

export const Navbar = () => {
  const { usuario: { nombre }, dispatch } = useContext(AutenticacionContext);
  const historial = useHistory()

  const manejarLogout = () => {
    historial.replace('/login')
    dispatch({
      type: types.logout
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link
        className="navbar-brand"
        to="/"
      >
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink
            className="nav-item nav-link"
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            to="/busqueda"
          >
            Búsqueda
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className='nav-item nav-link text-info'>
            {/* "??" Es operador de coalescencia.
            * La línea {nombre ?? "Usuario"} significa "si nombre no es nulo ni indefinido, 
            usa nombre; de lo contrario, usa 'Usuario'".
            */}
            {nombre ?? "Usuario"}
          </span>
          <button
            className="nav-item nav-link btn" onClick={manejarLogout}
          >
            Desconectarse
          </button>
        </ul>
      </div>
    </nav>
  )
}