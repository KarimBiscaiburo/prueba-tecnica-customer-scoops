import styled from "styled-components"

// Definir la interfaz para las props
interface IBarraProgreso {
    width: string;
  }

const BarraProgreso = styled.span<IBarraProgreso>`
    display: block;
    background: var(--color_barra_progreso);
    height: 8px;
    width: ${props => props.width};
    transition: var(--transicion);
`;


export default BarraProgreso;