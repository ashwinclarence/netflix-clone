import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MovieRow from "../Components/MovieRow/MovieRow";
import Navbar from "../Components/Navbar/Navbar";
import TitleCard from "../Components/TitleCard/TitleCard";
import {
  ACTION_URL,
  COMEDY_MOVIES_URL,
  DOCUMENTARIES_URL,
  HORROR_URL,
  ORIGINALS_URL,
  ROMANCE_MOVIE_URL,
  TRENDING_URL,
} from "../Constants/constant";
import userAuth from "../Context/UserContext";
import { useEffect } from "react";

const HomePage = () => {
  const { user,loading } = userAuth();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user)
    if (!user && !loading) {
      navigate("/");
    }
  }, [user, loading, navigate]);
  
  if (loading) {
    return <h2 className="flex items-center justify-center">Loading</h2>;
  } 
    
    
    return (
      <div>
      <Navbar />
      <TitleCard URL={TRENDING_URL} />
      <MovieRow title="DOCUMENTARIES" movieURL={DOCUMENTARIES_URL} />
      <MovieRow title="ACTION" movieURL={ACTION_URL} />
      <MovieRow title="ORIGINALS" movieURL={ORIGINALS_URL} />
      <MovieRow title="COMEDY" movieURL={COMEDY_MOVIES_URL} />
      <MovieRow title="HORROR" movieURL={HORROR_URL} />
      <MovieRow title="ROMANCE" movieURL={ROMANCE_MOVIE_URL} />
      <Footer />
    </div>
  );

};

export default HomePage;
