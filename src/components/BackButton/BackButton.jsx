
import css from './BackButton.module.css'
import { PropTypes } from "prop-types";

export const BackButton = (onClick, nameBtn) => {
    return(
        <button type="button" onClick={onClick} className={css.back__btn}>
            <span className={css.back__btn__text}>{nameBtn}</span>
        </button>
    );
};

BackButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    nameBtn: PropTypes.string.isRequired,
  };