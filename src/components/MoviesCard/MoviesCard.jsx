import {MovieDetails} from '../MovieDetails/MovieDetails'
import {Outlet, Link, useLocation} from 'react-router-dom';
import * as moviesAPI from 'services/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import {BackButton} from '../BackButton/BackButton';
import css from './MoviesCard.module.css'
import { Loader } from 'components/Loader/Loader';

export default function  MoviesCard  () {
    const location = useLocation();
    const [cast, setCast] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        moviesAPI.getCast(movieId).then(response => setCast(response.cast));
      }, [movieId]);

      const scrollToUp = () => {
        window.scrollTo({
          top: 100,
          // top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });

      }
    return(
        <div className={css.movies}>
            <div className={css.movies__btn}>
                <BackButton onClick={scrollToUp}/>
            </div>
            <Suspense fallback={<Loader />}>
            <div>
                {cast && <MovieDetails movie={cast}/>}
                <ul className={css.movies__description}>
                    <li>
                        <Link state={location.state} to="cast" >
                            <p className={css.movies__description__item}>Cast</p>
                        </Link>
                    </li>
                    <li>
                        <Link state={location.state} to="reviews">
                            <p className={css.movies__description__item}>Review</p>
                        </Link>
                    </li>
                </ul>
                    <Outlet/>
               
            </div>
            </Suspense>
         </div>
    )
}

