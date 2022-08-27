import { getCastMovies } from "services/Api";
import { useEffect, useState } from "react";
import {CastItem} from './CastItem/CastItem';
import { useParams } from "react-router-dom";

export const Cast =() => {
    const [movieCast, setMovieCast] = useState([]);
    const {movieId} = useParams;

    useEffect(() => {
        getCastMovies(movieId).then(data => {
            setMovieCast(data.cast);
           
        });
    }, [movieId]);

    return(
        <>
            {movieCast && movieCast.length 
            ? (<ul>
                    {movieCast.map(items => {
                        return (
                            <li key={items.id}>
                                <CastItem cast={items}></CastItem>
                            </li>
                        )
                            })}
                </ul>)
            : (<p>No movie</p>)
            }
        </>
    )
}