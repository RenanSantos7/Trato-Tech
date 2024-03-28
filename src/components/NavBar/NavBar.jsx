import styles from './NavBar.module.css'
import Busca from './Busca/Busca'
import Logo from '../Logo/Logo'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'

export default function NavBar() {

    return (
        <header className={classNames(styles.container, 'largura')}>
            <nav>
                <Logo />
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? styles.selecionado : ""}
                >Página Inicial</NavLink>
                <NavLink
                    to='/visitados'
                    className={({ isActive }) => isActive ? styles.selecionado : ""}
                >Mais visitados</NavLink>
            </nav>

            <div className={styles.left}>
                <Busca />

                <NavLink
                    to='/login'
                    className={({ isActive }) => isActive ? styles.selecionado : ""}
                >Login</NavLink>
            </div>
        </header>
    )
}
