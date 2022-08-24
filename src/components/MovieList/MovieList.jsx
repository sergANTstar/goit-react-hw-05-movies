import {Link, useLocation} from 'react-router-dom';
import { PropTypes } from "prop-types";
import css from './MovieList.module.css'

export const MovieList = ({movieList}) => {
    const location = useLocation();
    
    return(
        <ul className={css.moviaList}>
            {movieList.map(({original_title, id, poster_path }) =>{
                return(
                    <li key={id} className={css.moviaList__item}>
                        <Link
                            to={`/goit-react-hw-05-movies/movies/${id}`}
                                state={{from: location}}
                            >
                                <img
                                    key={id}
                                    src={
                                        poster_path
                                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                        : '../../img/404.jpeg'
                                    }
                                    alt={original_title}
                                    className={css.moviaList__img}
                                />
                                <p className={css.moviaList__title} >{original_title}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
};

MovieList.propType = {
    movieList: PropTypes.arrayOf(
        PropTypes.shape({
            original_title: PropTypes.string,
            id: PropTypes.number,
            poster: PropTypes.string,
        })
    )
}