import { useEffect, useState } from "react";
import css from './Home.module.css'
import * as moviesAPI from 'services/Api';
import { Link, useLocation } from 'react-router-dom';


export default function Home() {

    const location = useLocation();
    

    const [movies, setMovies] = useState(null);

    useEffect(() => {
      moviesAPI.GetTrending().then(response => setMovies(response.results));
    }, []);

    
    const poster = poster_path => {
         return !poster_path
        ? 'https://i.postimg.cc/G2jSRfZG/images.png'
        : `https://image.tmdb.org/t/p/w300${poster_path}`;
    };
  
    return (
      <>
        {movies && (
          <ul className={css.moviaList}>
            {movies.map(movie => (
              <li key={movie.id} className={css.moviaList__item}>
                <Link to={`/movies/${movie.id}`} state={location}>
                    <img
                      src={`${poster(movie.poster_path)}`}
                      alt={movie.title}
                      className={css.moviaList__img}
                    />
                    <h2 className={css.moviaList__title}>{movie.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
