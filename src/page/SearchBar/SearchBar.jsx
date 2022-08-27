import { useEffect, useState } from "react";
import { getSerchMovies } from "services/Api";
import { useSearchParams } from "react-router-dom";
import { MovieList } from "components/MovieList/MovieList";
import css from './SearchBar.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchBar () {
    const[searchParams, setSearchParams] = useSearchParams();
    const[query, setQuery] = useState('');
    const[searchMovieList, setSearchMovieList] = useState([]);
    const[error, setError] = useState(false);

    const hendlerInput = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    }

    const hendlerSubmite = e => {
        e.preventDefault()

        if (query.trim() === '') {
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

        setSearchParams ({query: query})
    }

    useEffect(() => {
        const curentQuery = searchParams.get('query')
     
        if(!curentQuery) return;

        getSerchMovies(curentQuery).then(data => {
            if (data.results.length === 0){
            setSearchMovieList([])
             setError('')
             return
            }
            setSearchMovieList(data.results)
            setError('')
            console.log(data.results.length)
            return
        }).catch(error => setError(error)).finally()
        
    }, [searchParams, query])
    
    return (
        <div>
            <div className={css.searchBar}>
                <form className={css.searchBar__form} onSubmit={hendlerSubmite}>
                    <input
                        className={css.searchBar__input}
                        type="text"
                        name="query"
                        value={query}
                        autoComplete="off"
                        onChange={hendlerInput}
                        placeholder="Search Films"
                    >
                        
                    </input>
                    <button className={css.searchBar__btn} type="submit">
                        <label className={css.searchBar__lable}>
                        </label>
                    </button>
                </form>
                <ToastContainer />
            </div>
            <div>
               {<MovieList movieList={searchMovieList}/> ? console.log(searchMovieList) : console.log(query)}
            </div>
        </div>
    );
}


