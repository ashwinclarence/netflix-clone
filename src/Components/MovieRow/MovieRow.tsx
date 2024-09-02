import MovieCard from "../MovieCard/MovieCard";
import { Movie } from "../../Types/Type";
import { useEffect, useState } from "react";
import axios from "../../axios";

type MovieRow = {
  title: string;
  movieURL: string;
};

const MovieRow = ({ title, movieURL }: MovieRow) => {
  const [moviesList, setMoviesList] = useState<Movie[]>([]);

  // useEffect for movies
  useEffect(() => {
    axios
      .get(movieURL)
      .then((response) => {
        setMoviesList(response.data.results);
      })
      .catch((err) => {
        console.log("Error on fetching discover movies", err);
      });
  }, []);

  return (
    <div className="my-8 px-8 ">
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-auto scrollbar-none ">
        {moviesList.map((movie) => (
          <MovieCard key={movie.id} image={movie.backdrop_path || movie.poster_path} title={movie.title || movie.name} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
