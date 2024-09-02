import './SignIn.css';
import netflixLogo from '../../assets/netflix-logo.png'
import { Link } from 'react-router-dom';
const SignIn = () => {

  return (
    <div className='login-container'> 
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black/70">
      <div className="absolute inset-0 bg-cover bg-center opacity-50"></div>
      <nav className="fixed top-0 left-0 w-full z-10 p-6">
        <img src={netflixLogo} alt="Netflix Logo" className="w-40" />
      </nav>
      <div className="bg-black bg-opacity-75 p-10 rounded-md w-full max-w-md z-10">
        <h2 className="text-white text-3xl mb-8">Sign In</h2>
        <form action="#" className="space-y-6">
          <div className="relative">
            <input
              type="text"
              required
              className="peer w-full bg-gray-800 text-white rounded px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Email or phone number"
            />
            <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-500">
              Email or phone number
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              required
              className="peer w-full bg-gray-800 text-white rounded px-4 py-3 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Password"
            />
            <label className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-1 peer-focus:text-xs peer-focus:text-red-500">
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition"
          >
            Sign In
          </button>
          <div className="flex justify-between items-center text-gray-500 text-sm">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" className="mr-2" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#" className="hover:underline">Need help?</a>
          </div>
        </form>
        <p className="text-gray-500 mt-8">
          Already have an account?{" "}
          <Link to='/login' className="text-white hover:underline">
            Login
          </Link>
        </p>
       
      </div>
      </div>
      </div>
  );
}

export default SignIn
