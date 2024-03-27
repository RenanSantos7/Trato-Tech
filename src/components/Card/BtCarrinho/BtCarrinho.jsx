import styled from 'styled-components'
import carrinho from './add_shopping_cart.svg'

const StyledButton = styled.button`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;

    img {
        --tamanho: 2rem;
        width: var(--tamanho);
        height: var(--tamanho);
    }
`

export default function BtCarrinho() {
    return (
        <StyledButton>
            <img src={carrinho} alt="" />
            <span>Adicionar</span>
        </StyledButton>
    )
}
