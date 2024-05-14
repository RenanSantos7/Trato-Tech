import { useEffect, useState } from 'react'
import styles from './Quantidade.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'

export default function Quantidade({ valor, max, aoMudar }) {
	const [num, setNum] = useState(valor || 1)

	useEffect(() => {
		if (num < 1) {
			setNum(1)
		}

		if (max && num > max) {
			setNum(max)
		}
	}, [num])

	function aumentar() {
		setNum(prev => prev + 1)
		aoMudar(num)
	}

	function diminuir() {
		setNum(prev => prev - 1)
		aoMudar && aoMudar(num)
	}

	return (
		<label className={styles.inputQtd}>
			<span className={styles.label}>Quantidade:</span>

            <button
                className={classNames(styles.btMenos, 'circulo')}
                onClick={diminuir}
            >
				<FontAwesomeIcon icon={faMinus} />
			</button>

			<input
				title='Número'
				type='text'
				className={styles.campo}
				value={num}
				readOnly
			/>

            <button
                className={classNames(styles.btMais, 'circulo')}
                onClick={aumentar}
            >
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</label>
	)
}
