import { Botao } from '../../../../components'
import styles from './HeroProd.module.css'

export default function HeroProd({foto, titulo, descricao, preco}) {
    return (
        <div className={styles.hero}>
            <div className={styles.imgContainer}>
                <img src={foto} alt="" />
            </div>

            <div className={styles.dados}>
                <div className={styles.texto}>
                    <h2>{titulo}</h2>
                    <p><b>Anunciante:</b> anunciante</p>
                    <p>{descricao}</p>
                    <p className={styles.preco}>
                        {preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                    </p>
                </div>
                <div className={styles.btContainer}>
                    <Botao variante='delineado'>Adicionar ao Carrinho</Botao>
                    <Botao>Comprar</Botao>
                </div>
            </div>
        </div>
    )
}