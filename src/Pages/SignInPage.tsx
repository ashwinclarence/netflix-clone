import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer"
import SignIn from "../Components/SignIn/SignIn"
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../Firebase/FireBaseConfig";

const SignInPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      }
    });
  }, []);

  return (
    
    <div>
          <SignIn />
          <Footer/>
    </div>
  )
}

export default SignInPage
