import { useRef } from "react";
import techicons from "../skills/techicons.js";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "UpNxt",
    img: "/upnxt.png",
    stack: [
      "Javascript",
      "Tailwind CSS",
      "React",
      "Firebase Auth",
      "Firestore DB",
    ],
    desc: "A Netflix clone app where users can see movies details, sign-up/login, and save/remove favorites.",
    githubLink: "https://github.com/Ryan-Fitzgerald-9/UpNxt",
    appLink: "https://upnxt-react.web.app/",
  },
  {
    id: 2,
    title: "Snake",
    img: "/snake2.png",
    stack: ["Javascript", "CSS3", "HTML5"],
    desc: "a retro-style version of the mobile game Snake.",
    githubLink: "https://github.com/Ryan-Fitzgerald-9/Project-1-SNAKE",
    appLink: "https://ryan-snake-print.surge.sh/",
  },
  {
    id: 3,
    title: "Mini-Compiler",
    img: "/compiler-img.png",
    stack: ["Python"],
    desc: "A very small compiler that takes BASIC and outputs C code. This was a fun project learning how the lexer, parser, and emitter work together in compiling code!",
    githubLink: "https://github.com/Ryan-Fitzgerald-9/mini-compiler",
    appLink: "",
  },
  {
    id: 4,
    title: "Visit Seattle",
    img: "/visit-seattle.png",
    stack: ["Javascript", "CSS3", "MongoDB", "Express", "React", "Node.js"],
    desc: "A group project app (MERN stack) for Seattle visitors where users can browse for restaurants, activities, and lodging - even take a quiz to chose an option. There is also an admin page allowing full front/backend CRUD.",
    githubLink: "https://github.com/annemarielewis/Visit_Seattle",
    appLink: "",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const getTechIcon = (techTitle) => {
    const techItem = techicons.find((item) => item.title === techTitle);
    if (techItem) {
      return (
        <img
          key={techTitle}
          src={techItem.imgLoc}
          alt={techTitle}
          className="stack-img"
        />
      );
    }
    return null;
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="stack-icons">
              {item.stack.map((item) => getTechIcon(item))}
            </div>
            <div className="links">
              {item.appLink && (
                <a
                  href={item.appLink}
                  target="blank"
                  rel="noopener noreferrer"
                  className="demo"
                >
                  See Demo
                </a>
              )}
              <a
                href={item.githubLink}
                target="blank"
                rel="noopener noreferrer"
                className="github"
              >
                Github
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
