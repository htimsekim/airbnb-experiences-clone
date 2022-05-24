import photogrid from "../images/photo-grid.png";

export default function Hero() {
  return(
      <div className="hero">
        <img
          src={photogrid}
          alt="grid"
          className="hero--photogrid"
        />
        <h1 className="hero--headline">
          Online Experiences
        </h1>
        <p className="hero--content">
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </div>
)};