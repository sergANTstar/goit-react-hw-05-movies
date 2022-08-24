import { useEffect, useState } from "react";
import {MovieList} from '../components/MovieList/MovieList'
import { getPopMovies } from "services/Api";

export default function Home() {
    const [popMovi, setPopMovies] = useState([]);


useEffect(() => {
    getPopMovies().then(data =>{
        setPopMovies(data.results)
    });
}, []);

return <MovieList movieList={popMovi}/>

};