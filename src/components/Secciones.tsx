import { useEffect, useState } from "react"

import "../styles/secciones.css"

import SecInicio from "./seccionesForm/SecInicio"
import SecCargo from "./seccionesForm/SecCargo"
import SecDesafios from "./seccionesForm/SecDesafios"
import SecCRM from "./seccionesForm/SecCRM"
import SecIndustria from "./seccionesForm/SecIndustria"
import SecFinal from "./seccionesForm/SecFinal"

interface IProps {
    cambiarFase: React.Dispatch<React.SetStateAction<number>>
}

let currentIndex = 0;

export default function Secciones({cambiarFase}: IProps) {
    const [nombre, setNombre] = useState<string>("Desconocido");
    const [secciones, setSecciones] = useState<NodeListOf<HTMLElement> | null>(null);

    useEffect(() => {
        const elementos = document.querySelectorAll<HTMLElement>(".secciones__seccion");
        setSecciones(elementos);
    }, []);

    function siguienteSeccion() {
        if (!secciones) return;

        // Mueve el slider a la siguiente etapa del formulario
        if (currentIndex < secciones.length - 1) {
            currentIndex++;
            secciones[currentIndex].scrollIntoView({ behavior: "smooth", inline: "end" });
            cambiarFase(prevState => prevState + 1);
        }
    }

    function seccionAnterior() {
        if (!secciones) return;

        // Mueve el slider a la etapa anterior del formulario
        if (currentIndex > 0) {
            currentIndex--;
            secciones[currentIndex].scrollIntoView({ behavior: "smooth", inline: "end" });
            cambiarFase(prevState => prevState - 1);
        }
    }

    function guardarNombre(nombre: string) {
        const nombreFormateado = nombre.trim();
        setNombre(nombreFormateado);
    }

    // Función para activar el fondo de la etapa final (si esta en desktop)
    function finFormulario() {
        if (!secciones) return;

        // Mueve el slider a la siguiente etapa del formulario
        if (currentIndex < secciones.length - 1) {
            currentIndex++;
            secciones[currentIndex].scrollIntoView({ behavior: "smooth", inline: "end" });
            cambiarFase(prevState => prevState + 1);
        }

        // Agregar clase al body
        const body = document.querySelector("body");
        body?.classList.add("activar-fondo");
    }
    

    return (
        <div className="contenido">
            <div>
                <img src="./logo.webp" alt="logo customer scoops" className="contenido__logo"/>

                <main className="contenido__secciones">

                    <SecInicio siguienteSeccion={siguienteSeccion} guardarNombre={guardarNombre}/>

                    <SecCargo siguienteSeccion={siguienteSeccion} seccionAnterior={seccionAnterior} nombre={nombre}/>

                    <SecDesafios siguienteSeccion={siguienteSeccion} seccionAnterior={seccionAnterior} />

                    <SecCRM siguienteSeccion={siguienteSeccion} seccionAnterior={seccionAnterior} />

                    <SecIndustria siguienteSeccion={finFormulario} seccionAnterior={seccionAnterior} />

                    <SecFinal />
                    
                </main>
            </div>
        </div>
    )
}