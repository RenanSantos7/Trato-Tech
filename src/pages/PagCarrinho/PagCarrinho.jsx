import styles from './PagCarrinho.module.css'
import { Background, Main } from '../../components'
import CarrinhoContainer from './components/CarrinhoContainer/CarrinhoContainer'
import { useSelector } from 'react-redux'
import CardCarrinho from './components/CardCarrinho/CardCarrinho'
import { useEffect } from 'react'

export default function PagCarrinho() {

    const carrinho = useSelector(state => state.carrinho)
    const produtos = useSelector(state => state.produtos)
    const produtosNoCarrinho = carrinho.map(item => (
        produtos.find(produto => produto.id === item.id)
    ))

	return (
        <>
            <Background height={400} />
		    <Main>
                <header className={styles.header}>
                    <h1>Carrinho de compras</h1>
                    <h2>Confira os produtos que você adicionou ao carrinho.</h2>
                </header>

                <CarrinhoContainer>
                    {produtosNoCarrinho.map(produto => (
                        <CardCarrinho produto={produto} />
                    ))}
                </CarrinhoContainer>
    		</Main>
		</>
	)
}
