import { useEffect, useState } from "react";
import { API_KEY, IMAGE_URL } from "../../Constants/constant";
import "./TitleCard.css";
import axios from "../../axios";
import { Movie } from "../../Types/Type";

type TitleCard = {
  URL: string;
};

const TitleCard = ({ URL }: TitleCard) => {
  const [trendingMovie, setTrendingMovie] = useState<Movie>();

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
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div className="titleCard-container text-white h-[100vh] overflow-hidden">
      <img src={IMAGE_URL+trendingMovie?.backdrop_path} alt="" className="w-full h-full relative" />
      <div className="absolute bottom-52 left-40 ">
        <h1 className="text-8xl tracking-tighter">{trendingMovie?.title || trendingMovie?.name}</h1>
        <p className="max-w-xl text-justify mt-8">{trendingMovie?.overview}</p>
        <button className="w-40 h-10 rounded-md bg-white text-black text-xl font-bold mt-4">
          <i className="fa-solid fa-play"></i> &nbsp;Play
        </button>
        <button className="w-40 h-10 rounded-md bg-white/30 text-white text-xl font-bold ms-5">
          <i className="fa-solid fa-circle-info"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default TitleCard;
