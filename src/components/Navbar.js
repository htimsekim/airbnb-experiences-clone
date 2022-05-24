import airbnblogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return(
    <nav className="navbar">
        <img
          src={airbnblogo}
          alt="airbnb logo"
          className="navbar--logo"
        />
    </nav>
  )
};