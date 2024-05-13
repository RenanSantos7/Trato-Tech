import styles from './CardsContainer.module.css'
import Card from '../Card/Card'

export default function CardsContainer({ titulo, array }) {
    return (
        <>
            <h2 className={styles.titulo}>{titulo}</h2>
            <div className={styles.cardsContainer}>
                {array?.map(item => (
                    <Card produto={item} key={item.id} />
                ))}
            </div>
        </>
    )
}
