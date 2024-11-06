import styled from "styled-components"

// Definir la interfaz para las props
interface IBarraProgreso {
    width: string;
}

const BarraProgreso = styled.span<IBarraProgreso>`
    position: absolute;
    top: 0;
    display: block;
    background: var(--color_oscuro);
    height: 8px;
    width: ${props => props.width};
    transition: var(--transicion);
    z-index: 100;
`;


export default BarraProgreso;