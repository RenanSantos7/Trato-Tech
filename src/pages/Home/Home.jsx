import { Background, CardsContainer, Hero, Main } from '../../components'
import Categorias from './components/Categorias/Categorias'
import styles from './Home.module.css'
// import { useContext } from 'react'
// import { DataContext } from '../../contexts/DataContext'

export default function Home() {

    // const {produtos} = useContext(DataContext)

    return (
        <>
            <Background height={850}/>
            <Main>
                <Hero
                    titulo='Classificados Tech'
                    image='/assets/categorias/relogio.jpg'
                    descricao='Compre, venda, anuncie, troque diversos tipos de produtos e serviços da área de tecnologia!'
                />

                <Categorias />

                <CardsContainer titulo='Anúncios recentes' array={[]} />
            </Main>
        </>
    )
}
