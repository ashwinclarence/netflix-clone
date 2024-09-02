import "./TitleCard.css";
import movieBanner from "../../assets/b1.jpg";
const TitleCard = () => {
  return (
    <div className="titleCard-container text-white">
      <div className="">
        <img src={movieBanner} alt="" className="w-full relative" />
        <div className="absolute bottom-52 left-40 ">
          <h1 className="text-8xl tracking-tighter">MOVIE TITLE</h1>
          <p className="max-w-xl text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam officia eaque corporis possimus iure? Alias, possimus accusantium. Perferendis dolorum temporibus expedita facilis reiciendis architecto, ipsum doloremque, laudantium ipsam dolores nam!</p>
          <button className="w-40 h-10 rounded-md bg-white text-black text-xl font-bold mt-4">
            <i className="fa-solid fa-play"></i> &nbsp;Play
          </button>
          <button className="w-40 h-10 rounded-md bg-white/30 text-white text-xl font-bold ms-5">
          <i className="fa-solid fa-circle-info"></i>  More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
