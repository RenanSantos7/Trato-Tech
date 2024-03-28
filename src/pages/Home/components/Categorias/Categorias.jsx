import Categoria from './Categoria/Categoria'
import styles from './Categorias.module.css'

export default function Categorias() {
    return (
        <div className={styles.categorias}>
            <h2>Categorias</h2>
            <div className={styles.container}>
                <Categoria nome='Dispositivos' />
                <Categoria nome='Automotivo' />
                <Categoria nome='Jogos' />
                <Categoria nome='Escritório' />
                <Categoria nome='Som e Imagem' />
                <Categoria nome='Prestação de Serviços' />
            </div>
        </div>
    )
}
