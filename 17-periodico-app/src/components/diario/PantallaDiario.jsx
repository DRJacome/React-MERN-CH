import { PantallaNota } from "../notas/PantallaNota"
import { NadaSeleccionado } from "./NadaSeleccionado"
import { Sidebar } from "./Sidebar"

export const PantallaDiario = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <NadaSeleccionado /> */}
        <PantallaNota />
      </main>
    </div>
  )
}