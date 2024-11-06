import styled from "styled-components";

interface ICRMCardProps {
    texto: string
}

const CRMCardStyle = styled.button`
    height: 40px;
    width: 150px;
    border: 1px solid var(--color_oscuro);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border-radius: 50px;

    @media (min-width: 600px) {
        width: 125px;
    }
`

const Texto = styled.p`
    font-size: 11px;
`

const CRMCard : React.FC<ICRMCardProps> = ({texto}) => (
    <CRMCardStyle>
        <Texto>{texto}</Texto>
    </CRMCardStyle>
)

export default CRMCard;