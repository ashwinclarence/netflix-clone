import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignInPage from "./Pages/SignInPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./Pages/PageNotFound";
import LikedMovies from "./Pages/LikedMovies";
import { LikedContextProvider } from "./Context/LikedContext";
import { UserContextProvider } from "./Context/UserContext";
const App = () => {
  return (
    <>
      <UserContextProvider>
      <LikedContextProvider>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/liked-movies" element={<LikedMovies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      </LikedContextProvider>
      </UserContextProvider>
    </>
  );
};

export default App;
