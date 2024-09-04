import MoviePlayer from '../Components/MoviePlayer/MoviePlayer'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar';

const MoviePlayerPage = () => {
    const Params = useParams();
  return (
      <div>
          <Navbar/>
          <MoviePlayer videoID={Params.id} />
    </div>
  )
}

export default MoviePlayerPage
