import { IMAGE_URL } from "../../Constants/constant";
import "./MovieCard.css";

type MovieCard = {
  id: number;
  image: string;
  title: string;
};

const MovieCard = ({ image, title, id }: MovieCard) => {
  return (
      <div className="relative min-w-72 h-44 mx-2 cursor-pointer hover:z-10 hover:scale-110 transform transition-transform duration-300 ease-out">
        {/* Movie Image */}
        <img
          src={IMAGE_URL + image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Overlay with Title and Play Button */}
        <div className="absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg ">
          <h3 className="text-xl absolute bottom-0 font-semibold mb-4 ">
            {title}
          </h3>
          <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-bold">
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
     
  );
};

export default MovieCard;
