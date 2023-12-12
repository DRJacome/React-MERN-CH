import { NotasAppBar } from "./NotasAppBar"

export const PantallaNota = () => {
    return (
        <div className="notes__main-content">
            <NotasAppBar />
            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Escribe tu título"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="¿Qué has hecho hoy?"
                    className="notes__textarea">
                </textarea>
                <div className="notes__image">
                    <img
                        src="https://4.bp.blogspot.com/-Imh-wjTJoLQ/UtL0ednyuQI/AAAAAAAAY2g/YPkh9qzvlbU/s1600/240773.jpg"
                        alt="Imagen paisaje"
                    />
                </div>
            </div>
        </div>
    )
}