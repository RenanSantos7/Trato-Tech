import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledButton } from './StyledButton'

export default function BtCarrinho({ noCarrinho = false, resolverCarrinho }) {
    
    function aoClicar() {
        resolverCarrinho()
        console.log('No carrinho:', noCarrinho)
    }

    return (
        <StyledButton destaque={noCarrinho} onClick={aoClicar}>
            <FontAwesomeIcon
                icon={faCartPlus}
                className='icone'
            />
            <span>{noCarrinho ? 'Remover' : 'Adicionar'}</span>
        </StyledButton>
    )
}
