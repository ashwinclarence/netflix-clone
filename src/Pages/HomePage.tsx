import Footer from "../Components/Footer/Footer"
import MovieRow from "../Components/MovieRow/MovieRow"
import Navbar from "../Components/Navbar/Navbar"
import TitleCard from "../Components/TitleCard/TitleCard"




const HomePage = () => {
  const movieData = [
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 1",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 2",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    {
      image: "https://i.pinimg.com/736x/71/0f/f2/710ff2d98ca34e0f4a27eb7a2d5c0598.jpg",
      title: "Movie Title 3",
    },
    // Add more movies as needed
  ];
  
  return (
    <div >
      <Navbar />
      <TitleCard />
      <MovieRow title="horror" movies={movieData}/>
      <MovieRow title="horror" movies={movieData}/>
      <MovieRow title="horror" movies={movieData}/>
      <MovieRow title="horror" movies={movieData}/>
      <MovieRow title="horror" movies={movieData}/>
      <MovieRow title="horror" movies={movieData}/>
      <Footer/>
    </div>
  )
}

export default HomePage
