import React from 'react'
import { Link } from "react-router-dom"

export const PantallaLogin = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form>
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={true}
                >
                    Iniciar sesión
                </button>
                <hr />
                <div className="auth__social-networks">
                    <p>Iniciar sesión con RRSS</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="/assets/icono-google.png" alt="botón google" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Google</b>
                        </p>
                    </div>
                </div>
                <Link to='/auth/register' className="link">Crear cuenta</Link>
            </form>
        </>
    )
}