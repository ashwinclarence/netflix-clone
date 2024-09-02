import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignInPage from "./Pages/SignInPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
