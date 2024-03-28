import styles from './Busca.module.css'
import icon from './search.svg'

export default function Busca() {
    return (
        <label className={styles.container}>
            <input
                type="text"
                placeholder="O que você procura?"
            />

            <img src={icon} alt="" />
        </label>
    )
}
