import { getDocs } from "firebase/firestore";
import "./MovieList.css";
import { favMovieRef } from "../../Firebase/FireBaseConfig";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";

type MovieList = {
  id: number;
  image: string;
  title: string;
};

const MovieList = () => {
  const [movies, setMovies] = useState<MovieList[]>([]);
  useEffect(() => {
    getDocs(favMovieRef).then((response) => {
      const moviesArray = response.docs.map((doc) => {
        return {
          id: doc.data().id,
          image: doc.data().image,
          title: doc.data().title,
        };
      });
      setMovies(moviesArray);
    });
  }, [movies]);

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

export default MovieList;
