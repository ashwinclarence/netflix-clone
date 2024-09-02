import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import MovieRow from "../Components/MovieRow/MovieRow";
import Navbar from "../Components/Navbar/Navbar";
import TitleCard from "../Components/TitleCard/TitleCard";
import axios from "../axios";
import { API_KEY } from "../Constants/constant";
import { Movie } from "../Types/Type";

const HomePage = () => {
  const [randomMovieIndex, setRandomMovieIndex] = useState<number>(0);
  const [trendingMovie, setTrendingMovie] = useState<Movie>();
  const movieData = [
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 1",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 2",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image:
        "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    // Add more movies as needed
  ];

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `/trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        const results: Movie[] = response.data.results;
        if (results.length > 0) {
          const randomIndex = Math.floor(Math.random() * results.length);
          setTrendingMovie(results[randomIndex]);

          console.log(response.data.results[randomIndex])
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    fetchTrendingMovies();
  }, []);


  
  return (
    <div>
      <Navbar />
      <TitleCard
        backdrop_path={trendingMovie?.backdrop_path}
        original_title={trendingMovie?.original_title || trendingMovie?.name}
        overview={trendingMovie?.overview}
      />
      <MovieRow title="horror" movies={movieData} />
      <MovieRow title="horror" movies={movieData} />
      <MovieRow title="horror" movies={movieData} />
      <MovieRow title="horror" movies={movieData} />
      <MovieRow title="horror" movies={movieData} />
      <MovieRow title="horror" movies={movieData} />
      <Footer />
    </div>
  );
};

export default HomePage;
