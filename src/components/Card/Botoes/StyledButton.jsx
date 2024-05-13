import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: transparent;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    color: ${({ destaque }) => destaque ? 'var(--cor1)' : 'inherit'};
    
    span {
        font-size: .875rem;
    }
`