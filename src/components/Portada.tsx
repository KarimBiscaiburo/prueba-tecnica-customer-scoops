import "../styles/portada.css"

interface IProps {
    fase: number
}

export default function Portada( {fase}: IProps ) {

    return (
        <header className="portada">
            <div className="portada__etapa">
                <p>0{fase + 1}</p>
                <span></span>
                <p>06</p>
            </div>
            <div className="portada__imagenes">
                <div className="portada__imagenes--logo">
                    <img src="/logo.webp" alt="logo customer scoops" />
                </div>
                <div className="portada__imagenes--persona">
                    <div className="portada__imagenes__container">
                        <img className="portada__imagenes__container--persona" src="/persona.webp" alt="persona portada customer scoops" />
                        <img className="portada__imagenes__container--fondo" src="/fondo-persona.webp" alt="fondo persona portada customer scoops" />
                    </div>
                </div>
            </div>
        </header>
    )
}