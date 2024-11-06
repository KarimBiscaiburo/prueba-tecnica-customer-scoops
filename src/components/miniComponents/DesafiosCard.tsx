import styled from "styled-components";

interface IProps {
    opcion: string
    texto: string
}

const DesafiosCardStyle = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    gap: 15px;
    padding: 4px;
    border: 1px solid var(--color_oscuro);
    border-radius: 50px;
    justify-content: start;
    align-items: center;
    background-color: transparent;

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

const DesafioTexto = styled.p`
    text-align: start;
    font-size: 11px;
`


const DesafiosCard: React.FC<IProps> = ({opcion, texto}) => (
    <DesafiosCardStyle>
        <ContenedorOpcion>
            <LetraOpcion>{opcion}</LetraOpcion>
        </ContenedorOpcion>
        <DesafioTexto>{texto}</DesafioTexto>
    </DesafiosCardStyle>
)

export default DesafiosCard;