import { useSelector } from 'react-redux'
import Categoria from './Categoria/Categoria'
import styles from './Categorias.module.css'

export default function Categorias() {
	const categorias = useSelector(state => state.categorias)

	return (
		<div className={styles.categorias}>
			<h2>Categorias</h2>
			<div className={styles.container}>
				{categorias.map(categoria => (
                    <Categoria
                        key={categoria.id}
                        categoria={categoria}
                    />
				))}
			</div>
		</div>
	)
}
