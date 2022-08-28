import css from './SearchForm.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState} from 'react';
import PropTypes from 'prop-types';


export default function SearchForm ({moviaSearch, submit}) {

    const [searchMovie, setSearchMovie] = useState(moviaSearch);

    const handlerInput = e => {
      setSearchMovie(e.currentTarget.value.toLowerCase());
    };

    const handlerSubmit = e => {
      e.preventDefault();
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
      submit(searchMovie);
    };
    return (

            <div className={css.searchForm}>
                <form className={css.searchForm__form} onSubmit={handlerSubmit}>
                    <input
                        className={css.searchForm__input}
                        type="text"
                        value={searchMovie}
                        autoComplete="off"
                        onChange={handlerInput}
                        placeholder="Search Films"
                        autoFocus
                    >
                    </input>
                    <button className={css.searchForm__btn} type="submit">
                        <label className={css.searchForm__lable}>
                        </label>
                    </button>
                </form>
            </div>
    );
}



SearchForm.propTypes = {
    moviaSearch: PropTypes.string,
    submit: PropTypes.func,
  };
