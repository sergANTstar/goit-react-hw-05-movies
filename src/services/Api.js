

import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = 'api_key=0069cb276a083aad6acda19b3adb7038';

export const GetTrending = () => {
  return axios.get(`/trending/movie/day?${KEY}`);
};

export const getMoviesById = (id) => {
  return axios.get(`/movie/${id}?${KEY}`);
};

export const getReviews = (id) => {
  return axios.get(`/movie/${id}/reviews?${KEY}&page=1`);
};

export const getCast = (id) => {
  return axios.get(`/movie/${id}/credits?${KEY}`);
};

export const getMovieBySearch = (query) => {
  return axios.get(
    `/search/movie?${KEY}&query=${query}&page=1&include_adult=false`
  );
};

