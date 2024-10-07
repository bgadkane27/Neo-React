import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const titleVarient = {
  hidden: {
    x: "-50vw"
  },
  visible: {
    x: 0,
    // rotate: -5,
    color: "#45ce6e",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 200,
      damping: 40
    },
  },
};

export const Herosection = () => {
  return (
    <main className="section-hero">
      <div className="container grid grid-two--cols">
        <div className="content-hero">
          <motion.h1
            className="title-hero"
            variants={titleVarient}
            initial="hidden"
            animate="visible"
          >
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
            alt="World Beauty"
            className="banner-image"
          />
        </div>
      </div>
    </main>
  );
};
