import { getDocs } from "firebase/firestore";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { favMovieRef } from "../Firebase/FireBaseConfig";

// Define the type for a movie
type Movie = {
  id: number;
  image: string;
  title: string;
};

// Define the context's state and actions
type LikedContextType = {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
};

// Create the context with default values
const LikedContext = createContext<LikedContextType>({
  movies: [],
  setMovies: () => {}, // default empty function
});


// Create the provider component
export const LikedContextProvider = ({ children }: { children: ReactNode }) => {
  // Manage the movies array with useState
  const [movies, setMovies] = useState<Movie[]>([]);

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
    <LikedContext.Provider value={{ movies, setMovies }}>
      {children}
    </LikedContext.Provider>
  );
};

// Custom hook to use the LikedContext
export default function useLikedMovies() {
  return useContext(LikedContext);
}
