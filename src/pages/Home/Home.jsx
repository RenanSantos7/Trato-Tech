import styles from './Home.module.css'
import Hero from '../../components/Hero/Hero'
import classNames from 'classnames'
import Background from '../../components/Background/Background'

export default function Home() {
    return (
        <>
            <Background height={900}/>
            <main className={classNames(styles.home, 'largura')}>
                <Hero
                    titulo='Classificados Tech'
                    foto='/src/assets/relogio.jpg'
                />
            </main>
        </>
    )
}
