import "./SignIn.css";
import netflixLogo from "../../assets/netflix-logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../Firebase/FireBaseConfig";
const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // signing using firebase
  const createNewAccount = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // validate the username and password
    if (username.trim() !== "" && password.trim().length >= 6) {
      // if the user already exist then sign in using the email and password
      signInWithEmailAndPassword(auth, username, password)
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          // if the user not exist then create a new user
          createUserWithEmailAndPassword(auth, username, password)
            .then(() => {
              navigate("/home");
            })
            .catch((error) => {
              console.log("Error on sign-up using firebase", error);
            });
          console.log("Error on login using firebase", error);
        });
    } else if (password.trim().length !== 6) {
      toast.error("Password should contain at least 6 characters");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="relative min-h-screen flex flex-col justify-center items-center bg-black/70">
        <div className="absolute inset-0 bg-cover bg-center opacity-50"></div>
        <nav className="fixed top-0 left-0 w-full z-10 p-6">
          <img src={netflixLogo} alt="Netflix Logo" className="w-40" />
        </nav>
        <div className="bg-black bg-opacity-75 p-10 rounded-md w-full max-w-md z-10">
          <h2 className="text-white text-3xl mb-8">Sign In</h2>
          <form onSubmit={(e) => createNewAccount(e)} className="space-y-6">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="peer w-full bg-gray-800 text-white rounded px-4 py-3  focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Email or phone number"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="peer w-full bg-gray-800 text-white rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Password"
            />
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
              <a href="#" className="hover:underline">
                Need help?
              </a>
            </div>
          </form>
          <p className="text-gray-500 mt-8">
            New to Netflix?{" "}
            <Link to="/" className="text-white hover:underline">
              Sign up now
            </Link>
          </p>
          <small className="text-gray-500 mt-2 block">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Learn more.
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
