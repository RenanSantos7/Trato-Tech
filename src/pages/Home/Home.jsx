import styles from './Home.module.css'
import Hero from '../../components/Hero/Hero'
import classNames from 'classnames'
import Background from '../../components/Background/Background'
import Categorias from './components/Categorias/Categorias'
import CardsContainer from '../../components/CardsContainer/CardsContainer'
// import { useContext } from 'react'
// import { DataContext } from '../../contexts/DataContext'

export default function Home() {

    // const {produtos} = useContext(DataContext)

    return (
        <>
            <Background height={850}/>
            <main className={classNames(styles.home, 'largura')}>
                <Hero
                    titulo='Classificados Tech'
                    foto='/assets/categorias/relogio.jpg'
                />

                <Categorias />

                {/* <CardsContainer titulo='Anúncios recentes' array={produtos} /> */}
            </main>
        </>
    )
}
