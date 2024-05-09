import "./navbar.scss";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.span>
        <div className="social">
          <a 
            href="https://github.com/Ryan-Fitzgerald-9"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub className="github" />
          </a>
          <a 
            href="https://www.linkedin.com/in/ryan-fitzgerald-rf09"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a 
            href="/rfitzgerald-resume.pdf"
            target="_blank"
            download
          >
            <FaFilePdf className="resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
