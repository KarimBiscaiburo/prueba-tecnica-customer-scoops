import styled from "styled-components"
import BotonOscuro from "./BotonOscuro";
import FlechaIzquierdaCirculo from "./FlechaIzquierdaCirculo";

// Definir la interfaz para las props
interface IBotonSiguienteAnteriorProps {
    texto: string;
    funcionSiguiente: () => void
    funcionAnterior: () => void
}

const BotonSiguienteAnteriorStyle = styled.div`
    display: flex;
    gap: 14px;

    @media (min-width: 600px) {
        transform: translateX(-49px);
    }
`
const ContenedorFlecha = styled.button`
    height: 35px;
    width: 35px;
    border: 1px solid var(--color_oscuro);
    border-radius: 50%;
    padding: 8px;
    background-color: transparent;
    cursor: pointer;
`


const BotonSiguienteAnterior: React.FC<IBotonSiguienteAnteriorProps> = ({texto, funcionSiguiente, funcionAnterior}) => (
    <BotonSiguienteAnteriorStyle>
        <ContenedorFlecha onClick={funcionAnterior}>
            <FlechaIzquierdaCirculo />
        </ContenedorFlecha>
        <BotonOscuro texto={texto} funcion={funcionSiguiente}/>
    </BotonSiguienteAnteriorStyle>
)

export default BotonSiguienteAnterior;
