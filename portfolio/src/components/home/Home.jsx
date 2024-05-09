import "./home.scss";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -300,
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

const imageVariants = {
  initial: {
    x: 300,
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
  const items = ["Home", "Skills", "Portfolio", "Contact"];

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
          <motion.div className="typeContainer">
            <motion.h1 variants={textVariants}>I'm a {" "}</motion.h1>
            <motion.div className="typeAnimation">
              <TypeAnimation
                sequence={[
                  "Software Engineer.",
                  2000,
                  "Web Developer.",
                  2000,
                  "Problem Solver.",
                  2000,
                  "Creative Thinker.",
                  2000,
                  "Process Enhancer.",
                  2000,
                ]}
                wrapper="h1"
                style={{color: "orange", fontWeight:"700"}}
                speed={40}
                repeat={Infinity}
              />
            </motion.div>
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
        Full-Stack Resourceful Collaborative
      </motion.div>
      <motion.div
        className="imageContainer"
        variants={imageVariants}
        initial="initial"
        whileInView="animate"
      >
        <img src="programmer.png" alt="dev" />
      </motion.div>
    </div>
  );
};

export default Home;
