import { useEffect, useState } from "react"

import "../styles/secciones.css"

import SecInicio from "./seccionesForm/SecInicio"
import SecCargo from "./seccionesForm/SecCargo"
import SecDesafios from "./seccionesForm/SecDesafios"
import SecCRM from "./seccionesForm/SecCRM"
import SecIndustria from "./seccionesForm/SecIndustria"
import SecFinal from "./seccionesForm/SecFinal"

interface IProps {
    fase: number
    cambiarFase: (fase: number) => void
}

let currentIndex = 0;

export default function Secciones({fase, cambiarFase}: IProps) {
    const [nombre, setNombre] = useState<string>("Desconocido");
    const [secciones, setSecciones] = useState<NodeListOf<HTMLElement> | null>(null);

    useEffect(() => {
        const elementos = document.querySelectorAll<HTMLElement>(".seccion");
        setSecciones(elementos);
    }, []);

    function siguienteSeccion() {
        if (!secciones) return;

        if (currentIndex < secciones.length - 1) {
            currentIndex++;
            secciones[currentIndex].scrollIntoView({ behavior: "smooth", inline: "end" });
            cambiarFase(fase + 1);
        }
    }

    function seccionAnterior() {
        if (!secciones) return;

        if (currentIndex > 0) {
            currentIndex--;
            secciones[currentIndex].scrollIntoView({ behavior: "smooth", inline: "end" });
            cambiarFase(fase - 1);
        }
    }

    function guardarNombre(nombre: string) {
        const nombreFormateado = nombre.trim();
        setNombre(nombreFormateado);
    }
    

    return (
        <div className="contenido">
            <div>
                <img src="./logo.webp" alt="logo customer scoops" className="contenido-logo"/>

                <main className="secciones_contenedor">

                    <SecInicio siguienteSeccion={siguienteSeccion} guardarNombre={guardarNombre}/>

                    <SecCargo siguienteSeccion={siguienteSeccion} seccionAnterior={seccionAnterior} nombre={nombre}/>

                    <SecDesafios siguienteSeccion={siguienteSeccion} seccionAnterior={seccionAnterior} />

                    <SecCRM siguienteSeccion={siguienteSeccion} seccionAnterior={seccionAnterior} />

                    <SecIndustria siguienteSeccion={siguienteSeccion} seccionAnterior={seccionAnterior} />

                    <SecFinal />
                    
                </main>
            </div>
        </div>
    )
}