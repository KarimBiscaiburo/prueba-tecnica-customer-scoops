import styled from "styled-components"

const BotonFinStyle = styled.a`
    color: var(--color_blanco);
    padding: 10px 40px;
    border-radius: 50px;
    border: none;
    background-color: var(--color_oscuro);
    text-decoration: none;
    font-size: 11px;
    outline: none;
`;

const BotonFin: React.FC = () => (
    <BotonFinStyle href="https://www.customerscoops.com/" rel="noopener noreferrer" target="_blank">
        Finalizar
    </BotonFinStyle>
)

export default BotonFin;