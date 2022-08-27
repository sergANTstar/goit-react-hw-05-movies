import {MovieDetails} from '../../components/MovieDetails/MovieDetails'
import {Outlet, Link, useLocation} from 'react-router-dom';
import { getDetailsMovies } from 'services/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Suspense } from 'react';
import {BackButton} from '../../components/BackButton/BackButton';
import css from './Movies.module.css'
import { Loader } from 'components/Loader/Loader';

export default function  Movies  () {
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        getDetailsMovies(movieId).then(data => {
            setMovie(data);
        });
    }, [movieId]);

    return(
        <div className={css.movies}>
            <div className={css.movies__btn}>
                <BackButton/>
            </div>
            <Suspense fallback={<Loader />}>
            <div>
                {movie && <MovieDetails movie={movie}/>}
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
                <Suspense fallback={<Loader />}>
                    <Outlet/>
                </Suspense>
            </div>
            </Suspense>
         </div>
    )

}
