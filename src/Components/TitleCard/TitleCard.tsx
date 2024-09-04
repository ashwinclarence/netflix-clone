import { useEffect, useState } from "react";
import {  API_KEY, IMAGE_URL } from "../../Constants/constant";
import "./TitleCard.css";
import axios from "../../axios";
import { Movie } from "../../Types/Type";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type TitleCard = {
  URL: string;
};

const TitleCard = ({ URL }: TitleCard) => {
  const [trendingMovie, setTrendingMovie] = useState<Movie>();
  const navigate = useNavigate();

  // fetch the trending movies randomly
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(URL);
        const results: Movie[] = response.data.results;
        if (results.length > 0) {
          const randomIndex = Math.floor(Math.random() * results.length);
          console.log(response.data.results[0])
          setTrendingMovie(results[randomIndex]);
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    fetchTrendingMovies();
  }, []);

  // function to play the movie trailer
  const handlePlayMovie = (id: number|undefined) => {
    try {
      axios
        .get(`movie/${id}/videos?api_key=${API_KEY}&&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            navigate(`/movie/${response.data.results[0].key}`);
          } else {
            toast.error("Movie Trailer not available");
          }
        });
      } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <div className="titleCard-container text-white h-[100vh] overflow-hidden">
      <img src={IMAGE_URL+trendingMovie?.backdrop_path} alt="" className="w-full h-full relative " />
      <div className="absolute bottom-52 left-40 ">
        <h1 className="text-8xl tracking-tighter truncate max-w-5xl">{trendingMovie?.title || trendingMovie?.name}</h1>
        <p className="max-w-xl text-justify mt-8">{trendingMovie?.overview}</p>
        <button className="w-40 h-10 rounded-md bg-white text-black text-xl font-bold mt-4" onClick={()=>handlePlayMovie(trendingMovie?.id)}>
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
