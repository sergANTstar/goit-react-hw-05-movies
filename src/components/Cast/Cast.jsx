import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as moviesAPI from 'services/Api';

export default function Cast() {
    const [movieCast, setMovieCast] = useState('');
    const {movieId} = useParams;

    useEffect(() => {

      
        moviesAPI.getCast(movieId).then(response => setMovieCast(response.data.cast));
        
    }, [movieId]);


  
  

      return (
        <div>
          {movieCast.length > 0 
          ? (
            <div>
              {movieCast.map(items => (
                <li key={items.id}>
                  <img
                    src={items.profile_path}
                    alt={items.name}
                  />
                  <p>{items.name}</p>
                
                </li>
              ))}
             
            </div>)
            : <p>There are no cast for this movie</p>
          }
        </div>

      );
    }