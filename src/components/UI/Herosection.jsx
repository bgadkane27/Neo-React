import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const titleVarient = {
  hidden: {
    x: "-50vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
      when: "beforeChildren",
    },
  },
};

const subtitleVarient = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      // delay: 0.2,
      // duration: 2,
      type : "spring",
      stiffness: 800,
      damping: 10,
    }
  },
};

export const Herosection = () => {
  return (
    <main className="section-hero">
      <div className="container grid grid-two--cols">
        <div className="content-hero">
          <motion.div
            variants={titleVarient}
            initial="hidden"
            animate="visible"
          >
            <h1 className="title-hero">
              Explore the world ! One country at a Time.
            </h1>
            <motion.p className="subtitle-hero" variants={subtitleVarient}>
              Exploring the world opens your mind to new cultures, experiences,
              and perspectives, enriching your understanding of life. It offers
              endless opportunities for adventure, learning, and personal growth
              in every corner of the globe.
            </motion.p>
          </motion.div>
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
