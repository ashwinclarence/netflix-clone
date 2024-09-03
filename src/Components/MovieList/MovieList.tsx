import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";
import useLikedMovies from "../../Context/LikedContext";

const MoviesList = () => {
  const { movies } = useLikedMovies();

  return (
    <div className="flex flex-col gap-4 min-h-[100vh] pt-40 py-8 px-8">
      <h2 className="text-white text-2xl font-semibold mb-4">My List</h2>
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={movie.image}
            title={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
