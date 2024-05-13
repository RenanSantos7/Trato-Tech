import { useSelector } from 'react-redux'
import {
	Background,
	CardsContainer,
	Hero,
	Main,
} from '../../components'
import { useParams } from 'react-router-dom'

export default function PagCategoria() {
	const { nomeCategoria } = useParams()

	const { categoria, produtos } = useSelector(state => ({
		categoria: state.categorias.find(
			categoria => categoria.id === nomeCategoria,
		),
		produtos: state.produtos.filter(
			produto => produto.categoria === nomeCategoria
		),
	}))

	return (
		<>
			<Background height={600} />
			<Main>
				<Hero
					titulo={categoria.nome}
					image={categoria.image}
					descricao={categoria.descricao}
				/>
				<CardsContainer array={produtos} />
			</Main>
		</>
	)
}
