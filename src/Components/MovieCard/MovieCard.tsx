import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { API_KEY, IMAGE_URL } from "../../Constants/constant";
import "./MovieCard.css";
import { favMovieRef } from "../../Firebase/FireBaseConfig";
import { toast } from "react-toastify";
import { MovieList } from "../../Types/Type";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const handleLikeMovie = (id: number, image: string, title: string) => {
  const docRef = doc(favMovieRef, id.toString());
  getDoc(docRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        deleteDoc(docRef).then(() => {
          toast.warn("Movie removed from favorites");
        });
      } else {
        setDoc(docRef, { id, image, title })
          .then(() => {
            toast.success("Movie added to favorites");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const MovieCard = ({ image, title, id }: MovieList) => {
  const navigate = useNavigate();
  const handlePlayMovie = (id: number) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          navigate(`/movie/${response.data.results[0].key}`);
        } else {
          toast.error("Movie Trailer not available");
        }
      });
  };
  return (
    <div className="relative min-w-72 h-44 mx-2 cursor-pointer hover:z-10 hover:scale-110 transform transition-transform duration-300 ease-out">
      {/* Movie Image */}
      <img
        src={IMAGE_URL + image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
        <h3 className="text-xl absolute bottom-0 font-semibold mb-4 ">
          {title}
        </h3>
        {/* button for like */}
        <div>
          {" "}
          <button
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-bold"
            type="button"
            onClick={() => handleLikeMovie(id, image, title)}
          >
            <i className="fa-regular fa-heart"></i>
          </button>
          <button
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-bold ms-3"
            type="button"
            onClick={() => handlePlayMovie(id)}
          >
            <i className="fa-solid fa-play"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
