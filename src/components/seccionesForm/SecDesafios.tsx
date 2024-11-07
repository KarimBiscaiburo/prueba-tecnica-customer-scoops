import { useState } from "react";
import DesafiosCard from "../miniComponents/DesafiosCard";
import BotonSiguienteAnterior from "../miniComponents/BotonSiguienteAnterior";

import "../../styles/secDesafios.css"

interface IProps {
    siguienteSeccion: () => void
    seccionAnterior: () => void
}

interface IDesafio {
    opcion: string
    texto: string
}

const desafios: IDesafio[] = [
    { opcion: "A", texto: "Aumentar conversión de leads a clientes" },
    { opcion: "B", texto: "Reducir customer churn" },
    { opcion: "C", texto: "Implementar un programa VoC" },
    { opcion: "D", texto: "Reducir costos en gestión de reclamos" },
    { opcion: "E", texto: "Optimizar procesos comerciales" },
    { opcion: "F", texto: "Optimizar procesos operativos" },
    { opcion: "G", texto: "Otro" },
] 

export default function SecDesafios({siguienteSeccion, seccionAnterior} : IProps) {
    const [desafioSeleccionado, setDesafioSeleccionado] = useState<string | null>(null);

    function seleccionarDesafio(desafio: string) {
        setDesafioSeleccionado(desafio);
        // Aquí iría el código para guardar la opción seleccionada ...
    }

    function validarContinuar() {
        // Validar que haya seleccionado un desafío
        if(!desafioSeleccionado) return;
        siguienteSeccion();
    }

    return (
        <section className="seccion alto-fijo">
            <div className="alto-fijo-superior">
                <p>¿Cuáles son tus principales desafíos para 2024?</p>

                <div className="desafio_contenedor">
                    {
                        desafios.map(desafio => (
                            <DesafiosCard 
                                key={desafio.opcion}
                                opcion={desafio.opcion}
                                texto={desafio.texto} 
                                isSeleccionada={desafioSeleccionado === desafio.opcion}
                                onClick={() => seleccionarDesafio(desafio.opcion)}
                            />
                        ))
                    }
                </div>
            </div>

            <BotonSiguienteAnterior texto="Siguiente" funcionSiguiente={validarContinuar} funcionAnterior={seccionAnterior}/>
        </section>
    )
}