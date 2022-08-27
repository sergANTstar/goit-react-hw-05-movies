import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Menue} from './Menue/Menue';
import {Loader} from '../components/Loader/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('../page/Home/Home'));
const MoviesCard = lazy(() => import('../components/MoviesCard/MoviesCard'));
const SearchBar = lazy(() => import('../page/SearchBar/SearchBar'));
const MovieDetails = lazy(() =>
  import('../components/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../components/Cast/Cast'));
const Review = lazy(() => import('../components/Review/Review')
);
const NotFound = lazy(() => import('../page/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Menue />
      <ToastContainer
        position={'top-center'}
        autoClose={3000}
        theme={'colored'}
      />
   
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movies" element={<MoviesCard />}>
            <Route index element={<SearchBar />}></Route>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Review />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Suspense>
      {/* </Suspense> */}
    </>
  );
};