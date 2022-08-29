import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from 'services/Api';
import  BackButton from "components/BackButton/BackButton";

export default function Cast() {
    const [movieCast, setMovieCast] = useState(null);
    const {movieId} = useParams;

    useEffect(() => {
        moviesAPI.getCast(movieId).then(response => setMovieCast(response.cast) );
        
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
          {movieCast && (
            <div>
              {movieCast.map(items => (
                <li key={items.id}>
                  <img
                    src={`${poster(items.profile_path)}`}
                    alt={items.name}
                    width="240"
                  />
                  <p>{items.name}</p>
                  <p>Character:
                    <span>{items.character}</span>
                  </p>
                </li>
              ))}
            </div>
          )}
          <BackButton
            onClick={scrollToUp}
            nameBtn={'go UP'}
          />
        </>
      );
    }