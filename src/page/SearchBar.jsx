import { useEffect, useState } from "react";
import { getSerchMovies } from "services/Api";
import{toast} from 'react-toastify';
import { useSearchParams } from "react-router-dom";
import { MovieList } from "components/MovieList/MovieList";

export default function SearchBar () {
    const[searchParams, setSearchParams] = useSearchParams();
    const[searchQuery, setSearchQuery] = useState('');
    const[searchMovieList, setSearchMovieList] = useState([]);

    const hendlerInput = e => {
        setSearchQuery(e.target.value);
    }

    const hendlerSubmite = e => {
        e.preventDefault()

        if (!searchQuery.trim()) {
           return ( toast.error('empty field', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            
            }))
        };

        setSearchParams ({query: searchQuery})

    }

    useEffect(() => {
        if(!searchParams.get('query')) {
            return
        }

        getSerchMovies(searchParams.get('query')).then(data => {
            setSearchMovieList(data.results)
        })
        
    }, [searchParams, searchQuery])
    
    return (
        <div>
            <div>
                <form oneSubmit={hendlerSubmite}>
                    <button type="submit">
                        <label>
                            Search
                        </label>
                    </button>
                    <input
                        type="text"
                        name="query"
                        value={searchQuery}
                        autoComplete="off"
                        oneChange={hendlerInput}
                        placeholder="Search..."
                        autoFocus
                    >
                    </input>
                </form>
            </div>
            <div>
                {searchMovieList?.length ? <MovieList movieList={searchMovieList}/> : <></>}
            </div>
        </div>
    );
}


