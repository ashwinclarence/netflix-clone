import MovieCard from "../MovieCard/MovieCard";
import { Movie, movieData } from "../../Types/Type";

type MovieRow = {
    title: string;
    movies:movieData[]
}

const MovieRow = ({ title, movies }:MovieRow) => {
      
  return (
    <div className="my-8 px-8 ">
      <h2 className="text-white text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-auto scrollbar-none ">
        {movies.map((movie, index) => (
          <MovieCard key={index} image={movie.image} title={movie.title} />
        ))}
      </div>
    </div>
  );
};

export default MovieRow;
