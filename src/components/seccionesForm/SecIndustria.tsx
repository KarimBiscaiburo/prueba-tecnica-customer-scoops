import { useState } from "react";

import TarjetaTexto from "../miniComponents/TarjetaTexto";
import BotonSiguienteAnterior from "../miniComponents/BotonSiguienteAnterior";

interface IProps {
    siguienteSeccion: () => void
    seccionAnterior: () => void
}

const industrias = ["Tecnología", "Software", "Servicios", "Financiera", "Telecomunicaciones", "Producción/Fabricación", "Logística", "Consumo Masivo", "Mayorista", "Retail", "Otra"];

export default function SecIndustria({siguienteSeccion, seccionAnterior} : IProps) {
    const [industriaSeleccionada, setIndustriaSeleccionada] = useState<string | null>(null);

    function seleccionarIndustria(industria: string) {
        setIndustriaSeleccionada(industria);
        // Aquí iría el código para guardar la opción seleccionada ...
    }

    function validarContinuar() {
        // Validar que haya seleccionado un cargo
        if(!industriaSeleccionada) return;
        siguienteSeccion();
    }

    return (
        <section className="secciones__seccion secciones__seccion-alto-fijo">
            <div className="alto-fijo-superior">
                <p><strong>Ahora te vamos a sorprender...</strong> <br/>¿A cuál industria pertenece tu empresa?</p>

                <div className="secciones__seccion__tarjetas">
                    {
                        industrias.map(industria => (
                            <TarjetaTexto 
                                texto={industria}
                                key={industria}
                                isSeleccionada={industriaSeleccionada === industria}
                                onClick={() => seleccionarIndustria(industria)}
                            />
                        ))
                    }
                </div>
            </div>

            <BotonSiguienteAnterior texto="Siguiente" funcionSiguiente={validarContinuar} funcionAnterior={seccionAnterior}/>
        </section>
    )
}