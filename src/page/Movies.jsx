import {MovieCard} from '../components/MovieCard/MovieCard'
import {Outlet, Link, useLocation} from 'react-router-dom';
import { getDetailsMovies } from 'services/Api';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {BackButton} from '../components/BackButton/BackButton';

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
        <div>
            <BackButton/>
            {movie && <MovieCard movie={movie}/>}
            <ul>
                <li>
                    <Link to="cast" state={location.state}>
                        Cast
                    </Link>
                </li>
                <li>
                    <Link to="reviews" state={location.state}>
                        Review
                    </Link>
                </li>
            </ul>
            <Outlet/>
         </div>
    )

}
