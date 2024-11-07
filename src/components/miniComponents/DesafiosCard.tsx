import styled from "styled-components";

interface IProps {
    opcion: string
    texto: string
    isSeleccionada: boolean
    onClick: () => void
}

const DesafiosCardStyle = styled.button<{isSeleccionada: boolean}>`
    width: 100%;
    height: 40px;
    display: flex;
    gap: 15px;
    padding: 4px;
    border: 1px solid var(--color_oscuro);
    border-radius: 50px;
    justify-content: start;
    align-items: center;
    cursor: pointer;
    outline: none;
    background-color: ${({ isSeleccionada }) => (isSeleccionada ? "var(--color_oscuro)" : "transparent")};
    transition: .3s ease all;

    @media (min-width: 600px) {
        width: 180px;
        gap: 5px;
    }
`

const ContenedorOpcion = styled.div`
    background-color: var(--color_claro);
    border-radius: 50px;
    height: 30px;
    min-width: 50px;
    max-width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 600px) {
        min-width: 30px;
        max-width: 30px;
        border-radius: 50%;
    }
`

const LetraOpcion = styled.p`
    text-aling: center;
    font-size: 10px;
    font-weight: 800;
    color: var(--color_blanco);
`

const DesafioTexto = styled.p<{isSeleccionada: boolean}>`
    color: ${({ isSeleccionada }) => (isSeleccionada ?  "var(--color_blanco)" : "var(--color_oscuro)")};
    text-align: start;
    font-size: 11px;
    transition: .3s ease all;
`


const DesafiosCard: React.FC<IProps> = ({opcion, texto, isSeleccionada, onClick}) => (
    <DesafiosCardStyle onClick={onClick} isSeleccionada={isSeleccionada}>
        <ContenedorOpcion>
            <LetraOpcion>{opcion}</LetraOpcion>
        </ContenedorOpcion>
        <DesafioTexto isSeleccionada={isSeleccionada}>{texto}</DesafioTexto>
    </DesafiosCardStyle>
)

export default DesafiosCard;