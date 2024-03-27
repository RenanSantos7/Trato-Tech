import classNames from 'classnames'
import Busca from '../Busca/Busca'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo'

export default function NavBar() {
    const location = useLocation().pathname

    return (
        <div className={styles.container}>
            <nav>
                <Logo />
                <NavLink 
                    className={`${location === '/' ? styles.selecionado : ''}`}
                    to='/'
                >Página Inicial</NavLink>
                <NavLink 
                    className={`${location === '/visitados' ? styles.selecionado : ''}`} 
                    to='/visitados'
                >Mais visitados</NavLink>
            </nav>

            <div className={styles.left}>
                <Busca />

                <NavLink to='/login'>Login</NavLink>
            </div>
        </div>
    )
}
