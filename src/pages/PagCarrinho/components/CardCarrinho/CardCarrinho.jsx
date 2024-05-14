import styles from './CardCarrinho.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Quantidade from '../Quantidade/Quantidade'

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
                <div>
                    <h3>{produto.titulo}</h3>
                    <p><b>Descrição:</b> {produto.descricao}</p>
                    <p><b>Anunciante:</b> {produto.anunciante}</p>
                </div>

                <div className={styles.acoes}>
                    <div className={styles.valor}>{precoStr}</div>
                    <Quantidade />
                </div>
            </div>

            <button className={styles.btApagar}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </article>
    )
}