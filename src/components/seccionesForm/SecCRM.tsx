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

    return (
        <section className="seccion">
            <p>¿Cuál CRM están utilizando en tu empresa?<br/>CRM:</p>

            <div className="contenedor-tarjetas">
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

            <BotonSiguienteAnterior texto="Siguiente" funcionSiguiente={siguienteSeccion} funcionAnterior={seccionAnterior}/>
        </section>
    )
}