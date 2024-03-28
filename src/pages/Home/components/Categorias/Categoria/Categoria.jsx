import styles from './Categoria.module.css'
import { Link } from "react-router-dom"

export default function Categoria({ nome }) {
    const image = `/assets/categorias/${nome.toLowerCase()}.jpg`

    return (
        <Link
            to={`/categoria/${nome}`}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
            }}
        >
            <article className={styles.categoria}>
                <div className={styles.foto}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.titulo}>{nome}</div>
            </article>
        </Link>
    )
}
