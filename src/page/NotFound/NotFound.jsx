import { NavLink } from "react-router-dom";
import css from './NotFound.module.css'

export default function NotFound  () {
    return (
        <div className={css.notFound}>
            <div className={css.notFound__block}>
                <h2 className={css.notFound__text}>Page note found</h2>
                <NavLink className={css.notFound__btn} to="/goit-react-hw-05-movies">
                    <span className={css.notFound__btn__text}>to Home </span>
                </NavLink>
            </div>
        </div>
    )
}