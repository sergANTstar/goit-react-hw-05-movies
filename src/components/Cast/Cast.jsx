import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from 'services/Api';
import  BackButton from "components/BackButton/BackButton";
import css from './Cast.module.css'

export default function Cast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);
 
    useEffect(() => {

      
        moviesAPI.getCast(movieId).then(response => setCredits(response.data.cast));
        
    }, [movieId]);

    const poster = profile_path => {
      return profile_path === null 
      ? 'https://i.postimg.cc/G2jSRfZG/images.png'
      : `https://image.tmdb.org/t/p/w300${profile_path}`
    };

    const scrollToUp = () => {
      window.scrollTo({
        top: 100,
        behavior: 'smooth',
      });
    };

      return (
        <>
        {credits 
        ? (
          <>
          <ul className={css.cast}>
            {credits.map(credit => (
              <li 
              key={credit.id}
              className={css.cast_item}
              >
                <img
                  src={`${poster(credit.profile_path)}`}
                  alt={credit.original_name}
                  className={css.cast_img}
                />
                <h3>{credit.original_name}</h3>
                <p>Character: {credit.character}</p>
              </li>
            ))}
            
          </ul>
             <BackButton
             onClick={scrollToUp}
             nameBtn={'go UP'}
           />
           </>
        )
        : <p>There are no cast for this movie</p>}
      </>
    );
  }