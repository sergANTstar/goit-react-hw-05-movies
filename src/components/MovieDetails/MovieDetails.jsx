
import css from './MovieDetails.module.css'
import {Outlet, useParams, useNavigate, useLocation} from 'react-router-dom';
import  BackButton  from "components/BackButton/BackButton";
import * as moviesAPI from 'services/Api';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function MovieDetails() {
   
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    const navigate = useNavigate();

    const location = useLocation();
  
    useEffect(() => {
      moviesAPI.getMoviesById(movieId).then(response => setMovie(response.data));
    }, [movieId]);

    const poster = poster_path => {
      return !poster_path
      ? 'https://i.postimg.cc/G2jSRfZG/images.png'
      : `https://image.tmdb.org/t/p/w300${poster_path}`;
    };
  

    
    const allGenres = genres => {
      if (!genres) {
        return;
      }
      return genres.map(genre => genre.name).join(', ');
    };
  
    const onBtnClick = () => {
 
      location.state
        ? navigate(location.state.pathname + location.state.search)
        : navigate('/');
    };

    return (
        <div className={css.movieDetails} >       
          {movie && (
            <div className={css.movieDetails__block}>
                <BackButton
                    onClick={onBtnClick}
                    nameBtn={'go BACK'}
                    key={movie.id}
                    width="100px"
                />
                <div>
                    <div className={css.movieCard}>
                        <div className={css.movieCard__block}>
                            <img
                            className={css.movieCard__img}
                            src={`${poster(movie.poster_path)}`}
                            alt={movie.title}
                            key={movie.id}
                            />
                            <div className={css.movieCard__list}>
                                <h2  className={css.movieCard__header}>
                                {movie.title} ({movie.release_date.slice(0, 4)})
                                </h2>
                                <p className={css.movieCard__text}>Use Score: {Math.round((movie.vote_average / 10) * 100)}%</p>
                                <h3 className={css.movieCard__header}>Overwiew</h3>
                                <p className={css.movieCard__text}>{movie.overview}</p>
                                <h3 className={css.movieCard__header}>Genres</h3>
                                <p className={css.movieCard__text}>{`${allGenres(movie.genres)}`}</p>
                            </div>
                        </div>
                        <div className={css.movieCard__additionalBlock}>
                            <h2> Additional information </h2>
                            <div className={css.movieCard__additional}>
                                <NavLink to={`/movies/${movie.id}/cast`} state={location.state}>
                                    <p className={css.movieCard__additionalText}>Cast</p>
                                </NavLink>
                                <NavLink to={`/movies/${movie.id}/reviews`} state={location.state}>
                                <p className={css.movieCard__additionalText}>Reviews</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
              <Outlet />
              </div>
            </div>
          )}
        </div>
      );

}


/*return(
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
)*/