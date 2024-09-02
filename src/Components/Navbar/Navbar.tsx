import "./Navbar.css";
import avatar from "../../assets/avatar3.png";
import netflixLogo from "../../assets/netflix-logo.png";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`px-20 mx-auto pt-6 flex justify-between text-white fixed w-full z-10 transition-colors duration-300 ${
        isScrolled
          ? "bg-black/70"
          : "bg-gradient-to-b from-black to-transparent"
      }`}
    >
      <div className="overflow-hidden flex gap-20 items-center">
        <img src={netflixLogo} alt="netflix" className="w-40 cursor-pointer" />
        <ul className="flex gap-5 ">
          <li className="hover:text-white/50 cursor-pointer">Home</li>
          <li className="hover:text-white/50 cursor-pointer">TV Shows</li>
          <li className="hover:text-white/50 cursor-pointer">Movies</li>
          <li className="hover:text-white/50 cursor-pointer">New & Popular</li>
          <li className="hover:text-white/50 cursor-pointer">My List</li>
          <li className="hover:text-white/50 cursor-pointer">
            Browse by Languages
          </li>
        </ul>
      </div>
      <div className="flex gap-6 text-2xl items-center">
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-bell"></i>
        <div className="relative inline-block text-left">
          <div className="flex items-center gap-3" onClick={toggleDropdown}>
            <img src={avatar} alt="" className="rounded-lg w-10" />
            <i className="fa-solid fa-caret-down"></i>
          </div>
          {isOpen && (
            <div className="absolute z-10 mt-2 bg-black/75 divide-y rounded-lg shadow w-44 border-white right-0">
              <ul className="py-2 text-sm ">
                <li className="block px-4 py-2 hover:underline">
                  <i className="fa-solid fa-pen me-2"></i> Manage profile
                </li>
                <li className="block px-4 py-2 hover:underline">
                  <i className="fa-solid fa-arrow-up-right-from-square me-2"></i>
                  Exit Profile
                </li>
                <li className="block px-4 py-2 hover:underline">
                  <i className="fa-regular fa-id-badge me-2"></i>Transfer
                  Profile
                </li>
                <li className="block px-4 py-2 hover:underline">
                  <i className="fa-solid fa-user me-2"></i> Account
                </li>
                <li className="block px-4 py-2 hover:underline border-b">
                  <i className="fa-regular fa-circle-question me-2"></i>Help
                  Center
                </li>
                <li className="block px-4 py-2 hover:underline mt-2 text-center">
                  Sign out of Netflix
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
