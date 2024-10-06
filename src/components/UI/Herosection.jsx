import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

export const Herosection = () => {
  return (
    <main className="section-hero">
      <div className="container grid grid-two--cols">
        <div className="content-hero">
          <h1
            className="title-hero"
          >
            Explore the world ! One country at a Time.
          </h1>
          <p className="subtitle-hero">
            Exploring the world opens your mind to new cultures, experiences,
            and perspectives, enriching your understanding of life. It offers
            endless opportunities for adventure, learning, and personal growth
            in every corner of the globe.
          </p>
          <NavLink to="/country" className="logo-link">
            <button className="main-btn">Explore Now</button>
          </NavLink>
        </div>
        <div className="image-hero">
          <img
            src="./Images/world.png"
            alt="world beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
