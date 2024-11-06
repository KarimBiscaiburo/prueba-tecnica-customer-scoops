import "../styles/portada.css"

interface IProps {
    fase: number
}

export default function Portada( {fase}: IProps ) {

    return (
        <header className="portada-contenedor">
            <div className="portada-etapa">
                <p>0{fase + 1}</p>
                <span></span>
                <p>06</p>
            </div>
            <div className="portada-imagenes_container">
                <div className="portada-logo_container">
                    <img src="/logo.webp" alt="logo customer scoops" />
                </div>
                <div className="portada-persona">
                    <div className="portada-persona_container">
                        <img className="portada-persona_persona" src="/persona.webp" alt="persona portada customer scoops" />
                        <img className="portada-persona_fondo" src="/fondo-persona.webp" alt="fondo persona portada customer scoops" />
                    </div>
                </div>
            </div>
        </header>
    )
}