import { IMAGE_URL } from '../../Constants/constant';
import './MovieCard.css'

type MovieCard = {
  image: string;
  title: string;
}


const MovieCard = ({image,title}:MovieCard) => {
  return (
    <div className="relative min-w-72 h-44 m-2 cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-out">
      <img
        src={IMAGE_URL+image}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-0 bg-black bg-opacity-70 text-white p-2 w-full rounded-b-lg">
        <h3 className="text-sm">{title}</h3>
      </div>
    </div>
  )
}

export default MovieCard
