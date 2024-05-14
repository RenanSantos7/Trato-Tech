import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as starOultined } from '@fortawesome/free-regular-svg-icons'
import { faStar as starFilled } from '@fortawesome/free-solid-svg-icons'
import { StyledButton } from './StyledButton'
    
export default function BtFavoritar({ favorito = false, mudarFavorito }) {
    
    const star = favorito ? starFilled : starOultined

    function aoClicar() {
        mudarFavorito()
    }

    return (
        <StyledButton onClick={aoClicar} destaque={favorito}>
            <FontAwesomeIcon icon={star} />
            <span>{favorito ? 'Desfavoritar' : 'Favorito'}</span>
        </StyledButton>
    )
}
