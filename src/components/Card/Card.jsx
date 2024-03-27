import BtCarrinho from './BtCarrinho/BtCarrinho'
import BtFavoritar from './BtFavoritar/BtFavoritar'
import styles from './Card.module.css'

export default function Card({img, titulo, descricao, anunciante, preco, favorito=false}) {
    return (
        <article className={styles.card}>
            <header className={styles.imgContainer}>
                <img src={img} alt="" />
            </header>
            <section>
                <h3 className={styles.titulo}>{titulo}</h3>
                <p>{descricao}</p>
                <p><b>Anunciante: {anunciante}</b></p>
            </section>

            <footer className={styles.footer}>
                <div className={styles.preco}>
                    {preco.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'})}
                </div>
                <div className={styles.botoes}>
                    <BtFavoritar favorito={favorito} />
                    <BtCarrinho />
                </div>
            </footer>
        </article>
    )
}
