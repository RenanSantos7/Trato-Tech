import { useSelector } from 'react-redux'
import styles from './PagProduto.module.css'
import { useParams } from 'react-router-dom'
import { Background, Main, NavBar } from '../../components'
import HeroProd from './components/HeroProd/HeroProd'
import Recomendados from '../../components/Recomendados/Recomendados'

export default function PagProduto() {

    const produtos = useSelector(state => state.itens)
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
                    <p>Gostei muito do produto no que diz respeito ao áudio,entretanto, pelo valor eu esperava um microfone excelente, mas na realidade o microfone é bem mediano pra baixo.</p>
                </div>

                <Recomendados />
            </Main>
        </>
    )
}