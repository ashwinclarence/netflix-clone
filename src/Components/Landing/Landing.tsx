import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container bg-black/50 flex flex-col items-center justify-center gap4 min-h-screen text-white gap-4">
      <h1 className="text-4xl">Unlimited movies, TV</h1>
      <h1>shows and more</h1>
      <span className="text-sm">Starts at &#8377; 149. Cancel anytime.</span>
      <span className="text-sm">
        Ready to watch? Enter your email to create or restart your membership
      </span>
      <div className="flex items-center gap-1">
        <input
          type="text"
          className="border border-double  border-white bg-black/20 text-white p-4 outline-none rounded h-12 w-80"
          placeholder="Email Address"
        />
        <button className="bg-netflix-red h-12 w-44 rounded-md text-xl">
          Get Started &nbsp;<i className="fa-solid fa-greater-than"></i>
        </button>
      </div>
    </div>
  );
};

export default Landing;
