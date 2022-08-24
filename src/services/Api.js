import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY_API = '0069cb276a083aad6acda19b3adb7038';

const defaultBaseUrl = axios.create({
    baseURL: BASE_URL,
    params: {
        api_key: KEY_API,
    }
});

export const getPopMovies = async () => {
    const {data} = await defaultBaseUrl.get('/trending/movie/week');
    return data;
  };
  export const getSerchMovies = async query => {
    const { data } = await defaultBaseUrl.get('/search/movie', {
      params: { query },
    });
    return data;
  };
  export const getDetailsMovies = async id => {
    const { data } = await defaultBaseUrl.get(`movie/${id}`);
    return data;
  };
  export const getCastMovies = async id => {
    const { data } = await defaultBaseUrl.get(`/movie/${id}/credits`);
    return data;
  };
  export const getRewiesMovies = async id => {
    const { data } = await defaultBaseUrl.get(`
  /movie/${id}/reviews`);
    return data;
  };