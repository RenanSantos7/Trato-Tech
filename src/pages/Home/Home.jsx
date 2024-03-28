import styles from './Home.module.css'
import Hero from '../../components/Hero/Hero'
import classNames from 'classnames'
import Background from '../../components/Background/Background'
import Categorias from './components/Categorias/Categorias'

export default function Home() {
    return (
        <>
            <Background height={850}/>
            <main className={classNames(styles.home, 'largura')}>
                <Hero
                    titulo='Classificados Tech'
                    foto='/assets/categorias/relogio.jpg'
                />

                <Categorias />
            </main>
        </>
    )
}
