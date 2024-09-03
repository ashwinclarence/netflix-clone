import "./Landing.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SecondaryNavbar from "../SecondaryNavbar/SecondaryNavbar";

const Landing = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  // validate the email address
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if the email is valid then move to howe page
    if (validateEmail(email)) {
      setError("");
      console.log("moving")
      navigate("/home");
    } else {
      setError("Invalid Email Address");
    }
  };

  // function to validate the email
  function validateEmail(email: string): boolean {
    // Regular expression for validating an email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the pattern
    return emailPattern.test(email);
  }
  return (
    <div className="landing-container ">
        <SecondaryNavbar/>
      <div className="bg-black/80 w-full flex flex-col items-center justify-center gap4 min-h-screen text-white gap-4">
        <h1 className="text-4xl">Unlimited movies, TV</h1>
        <h1>shows and more</h1>
        <span className="text-sm">Starts at &#8377; 149. Cancel anytime.</span>
        <span className="text-sm">
          Ready to watch? Enter your email to create or restart your membership
        </span>
        <form
          onSubmit={(event) => handleLogin(event)}
          className="flex  gap-1"
        >
          <div className="flex flex-col">
            <input
              type="text"
              id="login-email"
              className="border bg-black/20 text-white p-4 outline-none rounded h-12 w-80 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            {error && <label htmlFor="login-email" className="text-netflix-red">{error}</label>}
          </div>
          <button
            className="bg-netflix-red h-12 w-44 rounded-md text-xl"
            type="button"
          >
            Get Started &nbsp;&gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing;
