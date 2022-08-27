import { Outlet } from "react-router-dom";
import css from './Shared.module.css';
import {Link} from './Shared.styled'

export const Shared = () => {
    return (
        <>
        <header className={css.header}>
                <nav className={css.header__block}>
                    <ul className={css.header__block}>
                        <li className={css.header__items}>
                            <Link
                                to="/goit-react-hw-05-movies/"
                            >
                                <p  className={css.header__text}>Home</p>
                            </Link>
                        </li>
                        <li className={css.header__items}>
                            <Link 
                                to="/goit-react-hw-05-movies/movies"
                            >
                                <p  className={css.header__text}>Movies</p>
                            </Link>
                        </li>
                    </ul>
                    
                </nav>
               
        </header>
        <Outlet/>
        </>
    )
}