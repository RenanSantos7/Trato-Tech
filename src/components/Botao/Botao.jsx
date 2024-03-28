import styled from "styled-components"

const StyledButton = styled.button`
    padding: 1.5rem 2rem;
    background-color: var(--cor4);
    border-radius: 3rem;
    font-weight: 600;
    font-size: 1.25rem;
    text-align: center;
    transition: all .6s ease-in-out;

    &:hover {
        background-color: var(--cor2);
    }
`

export default function Botao({type = 'submit', children}) {
    return (
        <StyledButton type={type}>
            {children}
        </StyledButton>
    )
}
