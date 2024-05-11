import { useSelector } from 'react-redux'
import { Background, CardsContainer, Hero, Main } from '../../components'
import { useParams } from 'react-router-dom'

export default function PagCategoria() {
	const eletronicos = {
		id: 'eletronicos',
		nome: 'Eletrônicos',
		image: '/assets/categorias/eletronicos.jpg',
		descricao:
			'Os melhores e mais atuais dispositivos eletrônicos estão aqui! ',
	}

	const params = useParams()

	const { categoria, itens } = useSelector(state => ({
		categoria: state.categorias.find(
			categoria => categoria.id === params.categoria,
		),
		itens: state.itens.filter(
			item => item.categoria === params.categoria
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
				<CardsContainer array={itens} />
			</Main>
		</>
	)
}
