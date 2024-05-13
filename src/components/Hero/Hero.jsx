import { Botao } from '..'
import styles from './Hero.module.css'

export default function HeroCateg({ titulo, image, descricao }) {
        
    return (
        <div className={styles.container}>
            <div className={styles.texto}>
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <Botao tamanho='grande'>Quero anunciar</Botao>
            </div>
            <div className={styles.foto}>
                <img src={image} alt="" />
            </div>
        </div>
    )
}