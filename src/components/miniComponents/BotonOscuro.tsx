import styled from "styled-components"
import FlechaDerecha from "./FlechaDerecha";

// Definir la interfaz para las props
interface IProps {
    texto: string;
    funcion: () => void
}

const BotonOscuroStyle = styled.button`
    display: flex; 
    justify-content: center;
    aling-items: center;
    gap: 13px;
    padding: 10px 40px;
    border-radius: 50px;
    border: none;
    background-color: var(--color_oscuro);
    cursor: pointer;
    outline: none;
`;

const TextoStyle = styled.p`
    color: var(--color_blanco);
    font-size: 11px;
`

const BotonOscuro: React.FC<IProps> = ({texto, funcion}) => (
    <BotonOscuroStyle onClick={funcion}>
        <TextoStyle>{texto}</TextoStyle>
        <FlechaDerecha />
    </BotonOscuroStyle>
)

export default BotonOscuro;