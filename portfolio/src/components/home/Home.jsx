import { useRef } from "react";
import "./home.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  image: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "0%",
  },
  animate: {
    x: "-610%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
      duration: 25,
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={textVariants}>RYAN FITZGERALD</motion.h2>
          <motion.h1 variants={textVariants}>
            Software Engineer and Web Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              See My Latest Projects
            </motion.button>
            <motion.button variants={textVariants}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt="scroll"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full-Stack Creative Collaboration
      </motion.div>
      <motion.div 
        className="imageContainer"
        variants={textVariants}
        initial="image"
        whileInView="animate"
      >
        <img src="2robots.png" alt="dev" />
      </motion.div>
    </div>
  );
};

export default Home;
