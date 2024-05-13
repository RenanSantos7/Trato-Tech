import styles from './Card.module.css'
import BtCarrinho from './Botoes/BtCarrinho'
import BtFavoritar from './Botoes/BtFavoritar'
import { Link } from 'react-router-dom'
import { mudarFavorito } from '../../store/reducers/produtos'
import { useDispatch } from 'react-redux'

export default function Card({ produto }) {
	const dispatch = useDispatch()
	function resolverFavorito(id) {
		dispatch(mudarFavorito(id))
	}

	return (
		<article className={styles.card}>
			<Link to={`/produto/${produto.id}`}>
				<header className={styles.imgContainer}>
					<img src={produto.foto} alt='' />
				</header>
				<section>
					<h3 className={styles.titulo}>{produto.titulo}</h3>
					<p>
						<b>Descrição:</b> {produto.descricao}
					</p>
					<p>
						<b>Anunciante:</b> {produto.anunciante}
					</p>
				</section>
			</Link>

			<footer className={styles.footer}>
				<button className={styles.preco}>
					{produto.preco.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					})}
				</button>
				<div className={styles.favoritar}>
					<BtFavoritar
						favorito={produto.favorito}
						mudarFavorito={() => resolverFavorito(produto.id)}
					/>
				</div>
				<div className={styles.carrinho}>
					<BtCarrinho estahNoCarrinho={false} />
				</div>
			</footer>
		</article>
	)
}
