import styles from './Erro404.module.css'
import Background from '../../components/Background/Background'
import classNames from 'classnames'

export default function Erro404() {
	return (
		<>
			<Background height={650} />
			<main className={classNames(styles.erro404, 'largura')}>
				<h1>Erro404</h1>
				<h2>Não foi possível achar essa página</h2>
			</main>
		</>
	)
}
