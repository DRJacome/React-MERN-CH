import { useState } from "react"
import { AppRouter } from "./AppRouter"
import { Contexto } from "./UserContext"

export const MainApp = () => {
  const [usuario, setUsuario] = useState({})
  return (
    <Contexto.Provider value={{
      usuario,
      setUsuario
    }}>
      <AppRouter />
    </Contexto.Provider>
  )
}