import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const BackButton = () => {
    const location = useLocation();
    return(
        <NavLink to={location?.state?.from ?? '/'} type="button">
            Back
        </NavLink>
    );
};