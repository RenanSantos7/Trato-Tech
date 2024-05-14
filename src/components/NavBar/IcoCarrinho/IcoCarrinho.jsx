import styles from './IcoCarrinho.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function IcoCarrinho() {

    const carrinho = useSelector(state => state.carrinho)
    const carrinhoNum = carrinho.length

	return (
		<Link to='/carrinho' className={styles.icoCarrinho}>
			<FontAwesomeIcon icon={faShoppingCart} />
            {!!carrinhoNum && (
                <span className={styles.num}>{carrinhoNum}</span>
            )}
		</Link>
	)
}
