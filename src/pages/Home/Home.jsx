import { useSelector } from 'react-redux'
import { Background, CardsContainer, Hero, Main } from '../../components'
import Categorias from './components/Categorias/Categorias'

export default function Home() {

    const itens = useSelector(state => state.itens)
    const itensSelecionados = itens.slice(0, 6)
    
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

                <CardsContainer
                    titulo='Anúncios recentes'
                    array={itensSelecionados}
                />
            </Main>
        </>
    )
}
