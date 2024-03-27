import {styled} from 'styled-components'
import starFilled from './star_filled.svg'
import starOutlined from './star_outline.svg'

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

export default function BtFavoritar({ favorito }) {
    
    const star = favorito ? starFilled : starOutlined

    return (
        <StyledButton>
            <img src={star} alt="" />
            <span>Salvar</span>
        </StyledButton>
    )
}
