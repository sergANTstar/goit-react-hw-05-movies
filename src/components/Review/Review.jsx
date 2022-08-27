import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRewiesMovies } from "services/Api";
import {RevieItems} from './RevieItems/RevieItems';

export const Review = () => {
    const [movieReviews, setMovieReviews] = useState(null);
    const {movieId} = useParams();

    useEffect(() => {
        getRewiesMovies(movieId).then(data => {
            setMovieReviews(data.results);
        });}, [movieId])

        return (
            <div>
                {movieReviews && movieReviews.length ?(
                    <ul>
                        {movieReviews.map(item => {
                            return (
                                <li key={item.id}>
                                    <RevieItems reviews={item}></RevieItems>
                                </li>
                            )
                        })}
                    </ul>
                ) : (<p>No film</p>)}
            </div>
        )
}