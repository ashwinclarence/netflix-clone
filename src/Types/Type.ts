export type Genre = {
    id: number;
    name: string;
  };
  

  export type Movie = {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: Genre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number | null;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    name: string;
  };
  

export type movieData = {
    image: string;
    title:string
}
  

