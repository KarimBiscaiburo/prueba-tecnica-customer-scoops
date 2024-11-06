import BotonOscuro from "../miniComponents/BotonOscuro"

interface IProps {
    siguienteSeccion: () => void
    guardarNombre: (nombre: string) => void
}

export default function SecInicio({siguienteSeccion, guardarNombre} : IProps) {

    return (
        <section className="seccion primera">
            <p>Muchas gracias por tu interés en conocer <strong>customerScoops</strong>, que a través de Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad de tu negocio.</p>
            <p>Queremos conocerte, ¿cuál es tu nombre?</p>

            <input type="text" placeholder="Nombre" onChange={(e) => guardarNombre(e.target.value)}/>

            <BotonOscuro texto="Comenzar" funcion={siguienteSeccion}/>
        </section>
    )
}