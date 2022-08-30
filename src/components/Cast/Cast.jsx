import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from 'services/Api';
import  BackButton from "components/BackButton/BackButton";

export default function Cast() {
    const [movieCast, setMovieCast] = useState('');
    const {movieId} = useParams;

    useEffect(() => {
        moviesAPI.getCast(movieId).then(response => setMovieCast(response.data.cast) );
        
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
        <div>
          {movieCast.length > 0 
          ? (
            <div>
              {movieCast.map(items => (
                <li key={items.id}>
                  <img
                    src={`${poster(items.profile_path)}`}
                    alt={items.name}
                  />
                </li>
              ))}
               <BackButton
                  onClick={scrollToUp}
                  nameBtn={'go UP'}
                />
            </div>)
            : <p>There are no cast for this movie</p>
          }
        </div>
      );
    }