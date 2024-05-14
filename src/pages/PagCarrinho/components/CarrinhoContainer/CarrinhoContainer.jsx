import { Botao } from '../../../../components'
import styles from './CarrinhoContainer.module.css'

export default function CarrinhoContainer({ children, precoTotal = 0 }) {
	const precoStr = precoTotal.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})

	return (
		<div className={styles.container}>
			{children}

			<div className={styles.resumo}>
				<h3>Resumo da compra</h3>
				<div className={styles.direita}>
				    <p>
    					<span>Subtotal: </span>
    					<b>{precoStr}</b>
    				</p>
    				<p>
    					<span>Frete: </span>
    					<input
    						type='text'
    						name='cep'
    						placeholder='Insira seu CEP'
    					/>
    				</p>
				</div>
			</div>

			<Botao>Finalizar compra</Botao>
		</div>
	)
}
