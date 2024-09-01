import Footer from "../Components/Footer/Footer"
import Landing from '../Components/Landing/landing'
import Navbar from "../Components/Navbar/Navbar"
import TitleCard from "../Components/TitleCard/TitleCard"

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Landing/>
      <TitleCard />
      <Footer/>
    </div>
  )
}

export default HomePage
