import { useEffect, useState } from "react"

import "../styles/secciones.css"

import BotonOscuro from "./BotonOscuro"
import BotonSiguienteAnterior from "./BotonSiguienteAnterior"
import CargoCard from "./CargoCard"
import CRMCard from "./CRMCard"
import DesafiosCard from "./DesafiosCard"

let currentIndex = 0;

export default function Secciones() {

    const [secciones, setSecciones] = useState<NodeListOf<HTMLElement> | null>(null);

    useEffect(() => {
        const elementos = document.querySelectorAll<HTMLElement>(".seccion");
        setSecciones(elementos);
    }, []);

    function siguienteSeccion() {
        if (!secciones) return;

        if (currentIndex < secciones.length - 1) {
            currentIndex++;
            secciones[currentIndex].scrollIntoView({ behavior: "smooth", inline: "end" })
        }
    }

    function seccionAnterior() {
        if (!secciones) return;

        if (currentIndex > 0) {
            currentIndex--;
            secciones[currentIndex].scrollIntoView({ behavior: "smooth", inline: "end" })
        }
    }
    

    return (
        <div className="contenido">
            <div className="contenido_contenedor">
                <img src="./logo.webp" alt="logo customer scoops" />
                <main className="secciones_contenedor">
                    <section className="seccion primera">
                        <p>Muchas gracias por tu interés en conocer <strong>customerScoops</strong>, que a través de Formularios Conversacionales Inteligente te ayudamos a aumentar el revenue y rentabilidad de tu negocio.</p>
                        <p>Queremos conocerte, ¿cuál es tu nombre?</p>

                        <input type="text" placeholder="Nombre"/>

                        <BotonOscuro texto="Comenzar" funcion={siguienteSeccion}/>
                    </section>

                    <section className="seccion segunda">
                        <p><strong>Genial Juan, </strong> ahora nos gustaría tener cierta info para diseñar una gran propuesta de valor para ti:</p>
                        <p>¿Cuál es tu cargo/posición dentro de tu empresa?</p>

                        <div className="cargo_contenedor">
                            <CargoCard texto="Board member" />
                            <CargoCard texto="C-level" />
                            <CargoCard texto="Gerente" />
                            <CargoCard texto="Subgerente" />
                            <CargoCard texto="Jefe área" />
                            <CargoCard texto="Líder de área" />
                            <CargoCard texto="Ejecutivo / Analista" />
                            <CargoCard texto="Otro" />
                        </div>

                        <BotonSiguienteAnterior texto="Siguiente" funcionSiguiente={siguienteSeccion} funcionAnterior={seccionAnterior}/>
                    </section>

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

                    <section className="seccion cuarto">
                        <p>¿Cuál CRM están utilizando en tu empresa?<br/>CRM:</p>

                        <div className="crm_contenedor">
                            <CRMCard texto="SAP" />
                            <CRMCard texto="Microsoft Dynamics" />
                            <CRMCard texto="Salesforce" />
                            <CRMCard texto="Hubspot" />
                            <CRMCard texto="Zoho" />
                            <CRMCard texto="Netsuite (Oracle)" />
                            <CRMCard texto="Monday" />
                            <CRMCard texto="CRM Propio" />
                            <CRMCard texto="No tengo CRM" />
                        </div>

                        <BotonSiguienteAnterior texto="Siguiente" funcionSiguiente={siguienteSeccion} funcionAnterior={seccionAnterior}/>
                    </section>

                    <section className="seccion cuarto">
                        <p><strong>Ahora te vamos a sorprender...</strong> <br/>¿A cuál industria pertenece tu empresa?</p>

                        <div className="crm_contenedor">
                            <CRMCard texto="Tecnología" />
                            <CRMCard texto="Software" />
                            <CRMCard texto="Servicios" />
                            <CRMCard texto="Financiera" />
                            <CRMCard texto="Telecomunicaciones" />
                            <CRMCard texto=" Producción /Fabricación" />
                            <CRMCard texto="Logística" />
                            <CRMCard texto="Consumo Masivo" />
                            <CRMCard texto="Mayorista" />
                            <CRMCard texto="Retail" />
                            <CRMCard texto="Otra" />
                        </div>

                        <BotonSiguienteAnterior texto="Siguiente" funcionSiguiente={siguienteSeccion} funcionAnterior={seccionAnterior}/>
                    </section>

                    <section className="seccion sexta">
                        <p><strong>Muchas Gracias</strong><br />por querer ser parte 
                        de la familia Scoopers.</p>
                        <p>Nos vemos pronto!</p>

                        {/* <BotonOscuro texto="Finalizar"/> */}
                    </section>
                    
                </main>
            </div>
        </div>
    )
}