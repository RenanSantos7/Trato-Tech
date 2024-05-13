import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './CardCarrinho.module.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function CardCarrinho({ produto }) {
    const qtd = 1
    const preco = produto.preco * qtd
    const precoStr = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    return (
        <article className={styles.card}>
            <div className={styles.imgContainer}>
                <img src={produto.foto} alt="" />
            </div>
            <div className={styles.dados}>
                <h3>{produto.titulo}</h3>
                <p><b>Descrição:</b> {produto.descricao}</p>
                <p><b>Anunciante:</b> {produto.anunciante}</p>

                <div className={styles.acoes}>
                    <div className={styles.valor}>{precoStr}</div>
                </div>
            </div>

            <button className={styles.btApagar}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </article>
    )
}