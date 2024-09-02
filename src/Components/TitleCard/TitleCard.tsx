import { IMAGE_URL } from "../../Constants/constant";
import "./TitleCard.css";

type TitleCard = {
  original_title?: string;
  overview?: string;
  backdrop_path?: string; //this is the image of the movie
};

const TitleCard = ({ original_title, overview, backdrop_path }: TitleCard) => {
  return (
    <div className="titleCard-container text-white h-[100vh] overflow-hidden">
      <img src={IMAGE_URL+backdrop_path} alt="" className="w-full h-full relative" />
      <div className="absolute bottom-52 left-40 ">
        <h1 className="text-8xl tracking-tighter">{original_title}</h1>
        <p className="max-w-xl text-justify mt-8">{overview}</p>
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
