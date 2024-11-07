import styled from "styled-components"


const FlechaDerechaStyle = styled.div`
    display: none;
    width: 11px;
    @media (min-width: 600px) {
        display: block;
    }
`;

const FlechaDerecha: React.FC = () => (
    <FlechaDerechaStyle>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#00CCBC" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    </FlechaDerechaStyle>
)


export default FlechaDerecha