import "./Footer.css";
const Footer = () => {
  return (
    <div className="container mx-auto text-gray-400 px-4 py-10">
      <div className="footer-top-row flex gap-10 text-4xl">
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-youtube"></i>
      </div>
      <ul className="grid grid-cols-4 gap-4 mt-7">
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li> 
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <input type="text" className="bg-transparent border h-10 font-semibold text-center mt-10" placeholder="Service Code"/>
     <h6 className="mt-5"> &#169; 1997-2024 Netflix, Inc.</h6>
    </div>
  );
};

export default Footer;
