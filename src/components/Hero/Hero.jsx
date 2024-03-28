import Botao from '../Botao/Botao'
import styles from './Hero.module.css'

export default function Hero({ titulo, foto }) {
    return (
        <div className={styles.container}>
            <div className={styles.texto}>
                <h1>{titulo}</h1>
                <p>Compre, venda, anuncie, troque diversos tipos de produtos e serviços da área de tecnologia!</p>
                <Botao>Quero anunciar</Botao>
            </div>
            <div className={styles.foto}>
                <img src={foto} alt="" />
            </div>
        </div>
    )
}
