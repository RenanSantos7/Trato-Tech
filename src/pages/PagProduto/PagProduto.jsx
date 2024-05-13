import styles from './PagProduto.module.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Background, Main, NavBar } from '../../components'
import HeroProd from './components/HeroProd/HeroProd'
import Recomendados from '../../components/Recomendados/Recomendados'

export default function PagProduto() {

    const produtos = useSelector(state => state.produtos)
    const { id } = useParams()
    const produtoSelecionado = produtos.find(produto => (
        produto.id == id
    ))

    return (
        <>
            <Background height={135} />
            <Main>
                <HeroProd
                    titulo={produtoSelecionado.titulo}
                    foto={produtoSelecionado.foto}
                    descricao={produtoSelecionado.descricao}
                    preco={produtoSelecionado.preco}
                />

                <h2 className={styles.titulo}>Comentários</h2>
                <div className={styles.comentario}>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>É um ótimo produto. Nota 10!</p>
                </div>

                <div className={styles.comentario}>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>Gostei bastante</p>
                </div>

                <div className={styles.comentario}>
                    <p>⭐️⭐️⭐️⭐️⭐️</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum cupiditate? Dolorum consectetur est, numquam nihil hic accusantium eius mollitia dolorem temporibus aliquid eos voluptatem fugit ratione officiis officia nostrum!</p>
                </div>

                <div className={styles.comentario}>
                    <p>⭐️⭐️⭐️</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, dolorum cupiditate? Dolorum consectetur est, numquam nihil hic accusantium eius mollitia dolorem temporibus aliquid eos voluptatem fugit ratione officiis officia nostrum!</p>
                </div>

                <Recomendados />
            </Main>
        </>
    )
}