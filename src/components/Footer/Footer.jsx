import styles from './Footer.module.css'
import facebook from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import classNames from 'classnames'

export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <div className={classNames(styles.container, 'largura')}>
                <div className={styles.redesSociais}>
                    <img src={facebook} alt="ícone do facebook" />
                    <img src={instagram} alt="ícone do instagram" />
                    <img src={twitter} alt="ícone do twitter" />
                </div>
    
                <span>Desenvolvido por <em>Renan Santos</em> na <span className={styles.destaque}>Alura</span></span>
            </div>
        </footer>
    )
}
