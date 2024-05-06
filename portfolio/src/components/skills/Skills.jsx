import "./skills.scss";
import techicons from "./techicons.js";
import SkillItem from "./SkillItem.jsx";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -300,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Skills = () => {
  return (
    <motion.div
      className="skills"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on learning new concepts
          <br /> and moving forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/learning.png" alt="skills" />
          <h1>
            <motion.b whileHover={{ color: "#FFA500" }}>Unique</motion.b>{" "}
            Skillset
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "#FFA500" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT I KNOW</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ y: -20, scale: 1.1, z: 5, color: "#FFA500" }}
        >
          <h2>Languages</h2>
          <div>
            {techicons
              .filter((skill) => skill.type === "language")
              .map((skill) => (
                <SkillItem
                  key={skill.title}
                  imgLoc={skill.imgLoc}
                  title={skill.title}
                  type={skill.type}
                />
              ))}
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ y: -20, scale: 1.1, z: 5, color: "#FFA500" }}
        >
          <h2>Libraries / Frameworks</h2>
          <div>
            {techicons
              .filter((skill) => skill.type === "library-framework")
              .map((skill) => (
                <SkillItem
                  key={skill.title}
                  imgLoc={skill.imgLoc}
                  title={skill.title}
                  type={skill.type}
                />
              ))}
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ y: -20, scale: 1.1, z: 5, color: "#FFA500" }}
        >
          <h2>Databases</h2>
          <div>
            {techicons
              .filter((skill) => skill.type === "database")
              .map((skill) => (
                <SkillItem
                  key={skill.title}
                  imgLoc={skill.imgLoc}
                  title={skill.title}
                  type={skill.type}
                />
              ))}
          </div>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ y: -20, scale: 1.1, z: 5, color: "#FFA500" }}
        >
          <h2>Other</h2>
          <div>
            {techicons
              .filter((skill) => skill.type === "other")
              .map((skill) => (
                <SkillItem
                  key={skill.title}
                  imgLoc={skill.imgLoc}
                  title={skill.title}
                  type={skill.type}
                />
              ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
