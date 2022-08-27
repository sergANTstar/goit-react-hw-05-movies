import css from './SearchBar.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as moviesAPI from 'services/Api';

export default function SearchBar () {
    
    const[searchMovie, setSearchMovie] = useState();
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const hendlerInput = e => {
        setSearchMovie(e.currentTarget.value.toLowerCase());
    }

    useEffect(() => {
        if (searchMovie.trim() === '') {
            toast('enter the name of the movie', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
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
                }
            );
          }

          setMovies(response.results);
        
        });
      }, [searchMovie]);
    
      const hendlerSubmit = searchMovie => {
       
        navigate(`/movies/?query=${searchMovie}`);
        setSearchMovie(searchMovie);
        setMovies([]);
      };

    return (

            <div className={css.searchBar}>
                <form className={css.searchBar__form} onSubmit={hendlerSubmit}>
                    <input
                        className={css.searchBar__input}
                        type="text"
                        value={searchMovie}
                        autoComplete="off"
                        onChange={hendlerInput}
                        placeholder="Search Films"
                        autoFocus
                    >
                    </input>
                    <button className={css.searchBar__btn} type="submit">
                        <label className={css.searchBar__lable}>
                        </label>
                    </button>
                </form>
                <ToastContainer />
                {movies && (
                    <ul>
                        {movies.map(movie => (
                            <NavLink
                            to={`/movies/${movie.id}`}
                            state={location}
                            key={movie.id}
                            >
                            <p>{movie.title}</p>
                            </NavLink>
                        ))}
                    </ul>
                )}
            </div>
    );
}




