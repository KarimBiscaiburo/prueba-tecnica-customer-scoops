import DesafiosCard from "../miniComponents/DesafiosCard";
import BotonSiguienteAnterior from "../miniComponents/BotonSiguienteAnterior";

interface IProps {
    siguienteSeccion: () => void
    seccionAnterior: () => void
}

export default function SecDesafios({siguienteSeccion, seccionAnterior} : IProps) {

    return (
        <section className="seccion tercera">
            <p>¿Cuáles son tus principales desafíos para 2024?</p>

            <div className="desafio_contenedor">
                <DesafiosCard opcion="A" texto="Aumentar conversión de leads a clientes"/>
                <DesafiosCard opcion="B" texto="Reducir customer churn"/>
                <DesafiosCard opcion="C" texto="Implementar un programa VoC"/>
                <DesafiosCard opcion="D" texto="Reducir costos en gestión de reclamos"/>
                <DesafiosCard opcion="E" texto="Optimizar procesos comerciales"/>
                <DesafiosCard opcion="F" texto="Optimizar procesos operativos"/>
                <DesafiosCard opcion="G" texto="Otro"/>
            </div>

            <BotonSiguienteAnterior texto="Siguiente" funcionSiguiente={siguienteSeccion} funcionAnterior={seccionAnterior}/>
        </section>
    )
}