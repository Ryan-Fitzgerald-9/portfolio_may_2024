import "./navbar.scss";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ryan Fitzgerald
        </motion.span>
        <div className="social">
          <a href="#">
            <FaGithub className="github" />
          </a>
          <a href="#">
            <FaLinkedin className="linkedin" />
          </a>
          <a href="#">
            <FaFilePdf className="resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
