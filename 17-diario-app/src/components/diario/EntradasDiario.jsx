import { Entrada } from "./Entrada"

export const EntradasDiario = () => {

    const entradas = [1, 2, 3, 4, 5]
    return (
        <div className="journal__entries">
            {
                entradas.map(value => (
                    <Entrada key={value} />
                ))
            }
        </div>
    )
}