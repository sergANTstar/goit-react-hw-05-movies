import css from './SearchBar.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as moviesAPI from 'services/Api';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';

export default function SearchBar () {
    const [searchParams] = useSearchParams();
 
    const [searchMovie, setSearchMovie] = useState(
      searchParams.get('query') || ''
    );
    const [movies, setMovies] = useState([]);
   
    const navigate = useNavigate();
    const location = useLocation();
   
   
    useEffect(() => {
     
      if (!searchMovie) {
        return;
      }
      moviesAPI.getMovieBySearch(searchMovie).then(response => {
        if (response.results.length === 0) {
          return toast(
            'Sorry, no movies were found for your request', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
        setMovies(response.results);
        
      });
    }, [searchMovie]);
  
    const handlerSubmit = searchMovie => {
     
      navigate(`/movies/?query=${searchMovie}`);
      setSearchMovie(searchMovie);
      setMovies([]);
     
    };

    const poster = poster_path => {
        return !poster_path
       ? 'https://i.postimg.cc/G2jSRfZG/images.png'
       : `https://image.tmdb.org/t/p/w300${poster_path}`;
   };

    return (
            <>
                <SearchForm moviaSearch={searchMovie} submit={handlerSubmit}/>
                <div> 
                     
                    {movies && (
                        <ul className={css.moviaList}>
                            {movies.map(movie => (
                            
                            <li key={movie.id} className={css.moviaList__item}>
                                <NavLink
                                    to={`/movies/${movie.id}`}
                                    state={location}
                                    
                                >
                                    <img
                                        src={`${poster(movie.poster_path)}`}
                                        alt={movie.title}
                                        className={css.moviaList__img}
                                    />
                                 <h3 className={css.moviaList__title}>{movie.title}</h3>
                                </NavLink>
                            </li>
                            ))}
                        </ul>
                    )}
                </div>
            </>
    );
}






/**/