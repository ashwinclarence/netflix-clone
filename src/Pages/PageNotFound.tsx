import { Link } from 'react-router-dom'
import netflixLogo from '../assets/netflix-logo.png'
const PageNotFound = () => {
  return (
    <div className="h=[100] flex flex-col items-center justify-center gap-6 mx-20">
          <img src={netflixLogo} alt="" className='w-full' />
          <h2>Woops Something went wrong....</h2>
          <p>Sorry, we couldn't find the page you were looking for </p>
          <Link to='/home' className='border px-5 py-2 rounded '>Home</Link>
    </div>
  )
}

export default PageNotFound
