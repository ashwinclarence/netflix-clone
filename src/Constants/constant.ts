// base url of the tmdb
export const baseURL = "https://api.themoviedb.org/3";
// api key from tmdb movie database
export const API_KEY = "53a44f7e9b209c9faa06539f7a232721";
// image for the complete image path
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";

// URLs for different titles
export const TRENDING_URL = `/trending/all/week?api_key=${API_KEY}&language=en-US`;

export const ACTION_URL = `/discover/movie?api_key=${API_KEY}&with_genres=28`;

export const ORIGINALS_URL = `/discover/tv?api_key=${API_KEY}&with_networks=213`;

export const COMEDY_MOVIES_URL = `/discover/movie?api_key=${API_KEY}&with_genres=35`;

export const HORROR_URL = `/discover/movie?api_key=${API_KEY}&with_genres=27`;

export const ROMANCE_MOVIE_URL = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;

export const DOCUMENTARIES_URL = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
