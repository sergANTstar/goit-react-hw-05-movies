import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Menue} from './Menue/Menue';
import {Loader} from '../components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const Home = lazy(() => import('../page/Home/Home'));
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
    <ToastContainer/>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Outlet />}>
          <Route index element={<SearchBar />}></Route>
          <Route path=":movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Review />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Suspense>
  </>
  );
};