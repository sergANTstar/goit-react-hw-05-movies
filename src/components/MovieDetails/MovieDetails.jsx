import { PropTypes } from "prop-types";
import css from './MovieDetails.module.css'


export const MovieDetails = ({movie}) => {
    const {
        poster_path,
        title,
        name,
        release_date,
        vote_average,
        overview,
        genres,
    } = movie;

    return(
        <div className={css.movieCard}>
            <div className={css.movieCard__block}>
                <img
                    className={css.movieCard__img}
                    src ={
                       poster_path
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`
                        : 'https://i.postimg.cc/G2jSRfZG/images.png'
                    }
                    alt={title ? title : name}
                />
           
                <div className={css.movieCard__list}>
                    <h2  className={css.movieCard__header}>
                        {title ? title : name} ({release_date.slice(0, 4)})
                    </h2>
                    <p className={css.movieCard__text}>Use Score: {Math.round((vote_average / 10) * 100)}%</p>
                    <h3 className={css.movieCard__header}>Overwiew</h3>
                    <p className={css.movieCard__text}>{overview}</p>
                    <h3 className={css.movieCard__header}>Genres</h3>
                    <p className={css.movieCard__text}>{genres.map(item => item.name).join(' ,')}</p>
                </div>
            </div>
        </div>
    )
}


MovieDetails.propTypes = {
    movie: PropTypes.shape({
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.array.isRequired,
    }),
  };