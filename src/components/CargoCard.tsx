import styled from "styled-components";

// Definir la interfaz para las props
interface ICargoCardProps {
    texto: string;
}

const CargoCardStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color_oscuro);
    border-radius: 50px;
    width: 150px;
    height: 40px;
    background-color: transparent;
    cursor: pointer;

    @media (min-width: 600px) {
        width: 125px;
    }
`

const Parrafo = styled.p`
    color: var(--color_oscuro);
    font-size: 11px;
`

const CargoCard: React.FC<ICargoCardProps> = ({texto}) => (
    <CargoCardStyle>
        <Parrafo>{texto}</Parrafo>
    </CargoCardStyle>
)

export default CargoCard;