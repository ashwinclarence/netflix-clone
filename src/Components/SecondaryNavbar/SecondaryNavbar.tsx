import netflixLogo from '../../assets/netflix-logo.png'
const SecondaryNavbar = () => {
  return (
    <div className="bg-black/80 p-4 flex justify-between items-end w-full">
        <img src={netflixLogo} alt="" className="w-40 cursor-pointer" />
        <button className="bg-netflix-red text-white rounded-md px-5 py-2">Sign In</button>
      </div>
  )
}

export default SecondaryNavbar
