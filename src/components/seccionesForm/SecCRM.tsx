import { useState } from "react";
import TarjetaTexto from "../miniComponents/TarjetaTexto";
import BotonSiguienteAnterior from "../miniComponents/BotonSiguienteAnterior";

interface IProps {
    siguienteSeccion: () => void
    seccionAnterior: () => void
}

const CRMs = ["SAP", "Microsoft Dynamics", "Salesforce", "Hubspot", "Zoho", "Netsuite (Oracle)", "Monday", "CRM Propio", "No tengo CRM"];


export default function SecCRM({siguienteSeccion, seccionAnterior} : IProps) {
    const [crmSeleccionado, setCrmSeleccionado] = useState<string | null>(null);

    function seleccionarCrm(industria: string) {
        setCrmSeleccionado(industria);
        // Aquí iría el código para guardar la opción seleccionada ...
    }

    function validarContinuar() {
        // Validar que haya seleccionado un cargo
        if(!crmSeleccionado) return;
        siguienteSeccion();
    }

    return (
        <section className="secciones__seccion secciones__seccion-alto-fijo">
            <div className="alto-fijo-superior">
                <p>¿Cuál CRM están utilizando en tu empresa?<br/>CRM:</p>

                <div className="secciones__seccion__tarjetas">
                    {
                        CRMs.map(CRM => (
                            <TarjetaTexto 
                                texto={CRM}
                                key={CRM}
                                isSeleccionada={crmSeleccionado === CRM}
                                onClick={() => seleccionarCrm(CRM)}
                            />
                        ))
                    }
                </div>
            </div>

            <BotonSiguienteAnterior texto="Siguiente" funcionSiguiente={validarContinuar} funcionAnterior={seccionAnterior}/>
        </section>
    )
}