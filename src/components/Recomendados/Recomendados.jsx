import { useSelector } from 'react-redux'
import CardsContainer from '../CardsContainer/CardsContainer'

export default function Recomendados() {
	const produtos = useSelector(state => state.produtos)
	function randomSort(a, b) {
		return Math.random() - 0.5
	}

	const produtosSelecionados = produtos
		.toSorted(randomSort)
		.slice(0, 3)

	return (
		<>
			<CardsContainer titulo='Recomendados' array={produtosSelecionados} />
		</>
	)
}
