import { useState } from "react";
import TarjetaTexto from "../miniComponents/TarjetaTexto";
import BotonSiguienteAnterior from "../miniComponents/BotonSiguienteAnterior";

interface IProps {
    siguienteSeccion: () => void
    seccionAnterior: () => void
    nombre: string
}

const cargos = ["Board member", "C-level", "Gerente", "Subgerente", "Jefe área", "Líder de área", "Ejecutivo / Analista", "Otro"];

export default function SecCargo({siguienteSeccion, seccionAnterior, nombre} : IProps) {
    const [cargoSeleccionado, setCargoSeleccionado] = useState<string | null>(null);

    function seleccionarCargo(industria: string) {
        setCargoSeleccionado(industria);
        // Aquí iría el código para guardar la opción seleccionada ...
    }

    function validarContinuar() {
        // Validar que haya seleccionado un cargo
        if(!cargoSeleccionado) return;
        siguienteSeccion();
    }

    return (
        <section className="seccion alto-fijo">
            <div className="alto-fijo-superior">
                <p><strong>Genial {nombre}, </strong> ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:</p>
                <p>¿Cuál es tu cargo/posición dentro de tu empresa?</p>

                <div className="contenedor-tarjetas">
                    {
                        cargos.map(cargo => (
                            <TarjetaTexto 
                                texto={cargo}
                                key={cargo}
                                isSeleccionada={cargoSeleccionado === cargo}
                                onClick={() => seleccionarCargo(cargo)}
                            />
                        ))
                    }
                </div>
            </div>

            <BotonSiguienteAnterior texto="Siguiente" funcionSiguiente={validarContinuar} funcionAnterior={seccionAnterior}/>
        </section>
    )
}