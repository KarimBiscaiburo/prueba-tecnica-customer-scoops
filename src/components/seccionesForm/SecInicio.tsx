import BotonInicio from "../miniComponents/BotonInicio"
import InputNombre from "../miniComponents/InputNombre"

interface IProps {
    siguienteSeccion: () => void
    guardarNombre: (nombre: string) => void
}

export default function SecInicio({siguienteSeccion, guardarNombre} : IProps) {

    function verificarNombre() {
        const inputNombre: HTMLInputElement | null = document.querySelector("#inputNombre");

        if (!inputNombre) return;

        // Si no ingresa un nombre o es demasiado largo, no puede avanzar
        if(inputNombre.value === "" || inputNombre.value.length >= 15) {
            inputNombre.style.borderBottomColor = "red"
            return
        } else {
            inputNombre.style.borderBottomColor = "var(--color_claro)"
        }

        siguienteSeccion();
    }

    return (
        <section className="secciones__seccion">
            <p>Muchas gracias por tu interés en conocer <strong>customerScoops</strong>, que a través de Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad de tu negocio.</p>
            <p>Queremos conocerte, ¿cuál es tu nombre?</p>

            <InputNombre onChange={guardarNombre}/>

            <BotonInicio funcion={verificarNombre}/>
        </section>
    )
}