import { About } from "./About";
import { Herosection } from "../components/UI/Herosection";
import { Country } from "./Country";
import { motion, useScroll, useSpring } from "framer-motion";

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress)
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
      <Herosection />
      <About />
      <Country />
    </>
  );
};
