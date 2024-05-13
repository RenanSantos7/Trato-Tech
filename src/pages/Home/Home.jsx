import { useSelector } from 'react-redux'
import { Background, CardsContainer, Hero, Main, NavBar } from '../../components'
import Categorias from './components/Categorias/Categorias'

export default function Home() {

    const produtos = useSelector(state => state.produtos)
    const produtosSelecionados = produtos.slice(0, 6)
    
    return (
        <>
            <Background height={850} />
            <Main>
                <Hero
                    titulo='Classificados Tech'
                    image='/assets/categorias/relogio.jpg'
                    descricao='Compre, venda, anuncie, troque diversos tipos de produtos e serviços da área de tecnologia!'
                />

                <Categorias />

                <CardsContainer
                    titulo='Anúncios recentes'
                    array={produtosSelecionados}
                />
            </Main>
        </>
    )
}
