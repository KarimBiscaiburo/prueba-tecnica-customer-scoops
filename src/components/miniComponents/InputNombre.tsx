import styled from "styled-components";

// Definir la interfaz para las props
interface IProps {
    onChange: (e: string) => void
}

const InputNombreStyle = styled.input`
    border: none;
    padding: 5px 0;
    border-bottom: 1px solid var(--color_oscuro-opacidad);
    color: var(--color_oscuro);
    outline: none;
    font-size: 17px;
    width: 100%;
    transition: .3s ease all;

    &:focus {
        border-bottom: 1px solid var(--color_claro);
    }
`

const InputNombre: React.FC<IProps> = ({onChange}) => (
    <InputNombreStyle id="inputNombre" type="text" placeholder="Nombre" onChange={(e) => onChange(e.target.value)} />
)

export default InputNombre;