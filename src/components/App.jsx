import { Routes, Route } from "react-router-dom";
import {lazy, Suspense} from 'react';
import {Shared} from './Shared/Shared';
import {Cast} from './Cast/Cast';
import { Review } from "./Review/Review";

const SearchBar = lazy(() => import('../page/SearchBar'));
const NotFound = lazy(() => import('../page/NotFound/NotFound'));
const Movies = lazy(() => import('../page/Movies'));
const Home = lazy(() => import('../page/Home'));



export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Shared/>}>
          <Route
            index
            element={<Suspense fallback={<h2>Loading...</h2>}>
                <Home/>
              </Suspense>}
          /> 
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <SearchBar />
              </Suspense>
            }
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Movies/>
              </Suspense>} 
          >
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Review/>}/>
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<h2>Loading...</h2>}>
              <NotFound/>
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};