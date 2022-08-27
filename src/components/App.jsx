import { Routes, Route } from "react-router-dom";
import {lazy, Suspense} from 'react';
import {Shared} from './Shared/Shared';
import {Cast} from './Cast/Cast';
import { Review } from "./Review/Review";
import { Loader} from './Loader/Loader';

const SearchBar = lazy(() => import('../page/SearchBar/SearchBar'));
const Movies = lazy(() => import('../page/Movies/Movies'));
const Home = lazy(() => import('../page/Home'));
const NotFound = lazy(() => import('../page/NotFound/NotFound'));



export const App = () => {
  return (
  <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/goit-react-hw-05-movies/" element={<Shared />}>
          <Route
            index element={<Suspense fallback={<Loader/>}>
                <Home/>
              </Suspense>
              }
          /> 
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={
              <Suspense fallback={<Loader/>}>
                <SearchBar />
              </Suspense>
            }
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={
              <Suspense fallback={<Loader/>}>
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
            <Suspense fallback={<Loader/>}>
              <NotFound/>
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
};