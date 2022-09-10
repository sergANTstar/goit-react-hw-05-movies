import { Outlet } from "react-router-dom";
import css from './Menue.module.css';
import {Link} from './Menue.styled'


export const  Menue = () => {
    return (
        
        <>
        <header className={css.header}>
            <div className={css.header__nav}>
                <nav>
                    <ul className={css.header__block}>
                        <li className={css.header__items}>
                            <Link 
                                to="/"
                            >
                                <p className={css.header__text} >Home</p>
                            </Link>
                        </li>
                        <li className={css.header__items}>
                            <Link 
                                to="/movies"
                            >
                                <p className={css.header__text} >Movies</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet/>
        </>
    )
}