import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledButton } from './StyledButton'

export default function BtCarrinho({estahNoCarrinho = false}) {
    return (
        <StyledButton destaque={estahNoCarrinho}>
            <FontAwesomeIcon
                icon={faCartPlus}
                className='icone'
            />
            <span>{estahNoCarrinho ? 'Remover' : 'Adicionar'}</span>
        </StyledButton>
    )
}
