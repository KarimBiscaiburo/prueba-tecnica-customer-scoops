import styled from "styled-components"

// Definir la interfaz para las props
interface IProps {
    funcion: () => void
}

const BotonInicioStyle = styled.button`
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
    color: var(--color_blanco);
    font-size: 11px;
`;

const BotonInicio: React.FC<IProps> = ({funcion}) => (
    <BotonInicioStyle onClick={funcion}>
        Comenzar
    </BotonInicioStyle>
)

export default BotonInicio;