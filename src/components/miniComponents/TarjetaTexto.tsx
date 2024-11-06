import styled from "styled-components";

// Definir la interfaz para las props
interface IProps {
    texto: string
    isSeleccionada: boolean
    onClick: () => void
}

const TarjetaTextoStyle = styled.button<{isSeleccionada: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color_oscuro);
    border-radius: 50px;
    width: 150px;
    height: 40px;
    background-color: ${({ isSeleccionada }) => (isSeleccionada ? "var(--color_oscuro)" : "transparent")};
    cursor: pointer;
    transition: .3s ease all;

    @media (min-width: 600px) {
        width: 125px;
    }
`

const Parrafo = styled.p<{isSeleccionada: boolean}>`
    color: ${({ isSeleccionada }) => (isSeleccionada ?  "var(--color_blanco)" : "var(--color_oscuro)")};
    font-size: 11px;
    transition: .3s ease all;
`

const TarjetaTexto: React.FC<IProps> = ({texto, isSeleccionada, onClick}) => (
    <TarjetaTextoStyle onClick={onClick} isSeleccionada={isSeleccionada}>
        <Parrafo isSeleccionada={isSeleccionada}>{texto}</Parrafo>
    </TarjetaTextoStyle>
)

export default TarjetaTexto;