import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import css from './BackButton.module.css'

export const BackButton = () => {
    const location = useLocation();
    return(
        <NavLink to={location?.state?.from ?? '/'} type="button" className={css.back__btn}>
            <span className={css.back__btn__text}>Back</span>
        </NavLink>
    );
};