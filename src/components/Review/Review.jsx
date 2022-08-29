import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from 'services/Api';
import  BackButton  from "components/BackButton/BackButton";


export default function Review() {
    const [movieReviews, setMovieReviews] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        moviesAPI.getReviews(movieId)
          .then(response => setMovieReviews(response.results));
      }, [movieId]);

      const scrollToUp = () => {
        window.scrollTo({
          top: 100,
          behavior: 'smooth',
        });
      };

      return (
        <>
          {movieReviews.length > 0 ? (
            <ul>
              {movieReviews.map(items => (
                <li key={items.id}>
                  <p>
                    Author: <span> {items.author} </span>
                  </p>
                  <p>{items.content}</p>
                </li>
              ))}
              <BackButton
                onClick={scrollToUp}
                nameBtn={'go UP'}
              />
            </ul>
        
          ) : (
            <p>There are no reviews for this movie</p>
          )}
        
        </>
      );
    }