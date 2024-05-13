import classNames from 'classnames'
import styles from './Botao.module.css'

export default function Botao({
	type = 'button',
	children,
	tamanho = 'normal',
	variante,
}) {
	let pd = ''
	let fsize = ''
	switch (tamanho) {
		case 'grande':
			pd = '1.5rem 2rem'
			fsize = '1.25rem'
			break
		case 'normal':
			pd = '1rem 1.5rem'
			fsize = '1.15rem'
			break
		case 'pequeno':
			pd = '.5rem 1rem'
			fsize = '1rem'
			break
	}

	return (
		<button
			type={type}
			className={classNames(styles.botao, styles[variante])}
			style={{
				padding: pd,
				fontSize: fsize,
			}}
		>
			{children}
		</button>
	)
}
