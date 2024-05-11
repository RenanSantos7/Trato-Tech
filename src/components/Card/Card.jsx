import BtCarrinho from './BtCarrinho/BtCarrinho'
import BtFavoritar from './BtFavoritar/BtFavoritar'
import styles from './Card.module.css'

export default function Card({ obj }) {
	return (
		<article className={styles.card}>
			<div>
			    <header className={styles.imgContainer}>
    				<img src={obj.foto} alt='' />
    			</header>
    			<section>
    				<h3 className={styles.titulo}>{obj.titulo}</h3>
    				<p>Descrição: {obj.descricao}</p>
    				<p>
    					<b>Anunciante: {obj.anunciante}</b>
    				</p>
    			</section>
			</div>

			<footer className={styles.footer}>
				<div className={styles.preco}>
					{obj.preco.toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					})}
				</div>
				<div className={styles.botoes}>
					<BtFavoritar favorito={obj.favorito} />
					<BtCarrinho />
				</div>
			</footer>
		</article>
	)
}
