import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const Herosection = () => {
  return (
    <main className="section-hero">
      <div className="container grid grid-two--cols">
        <div className="content-hero">
          <motion.h1 animate={{ color: "royalblue" }} className="title-hero">
            Explore the world ! One country at a Time.
          </motion.h1>
          <p className="subtitle-hero">
            Exploring the world opens your mind to new cultures, experiences,
            and perspectives, enriching your understanding of life. It offers
            endless opportunities for adventure, learning, and personal growth
            in every corner of the globe.
          </p>
          <div>
            <NavLink to="/country" className="logo-link">
              <button className="main-btn">Explore Now</button>
            </NavLink>
          </div>
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
