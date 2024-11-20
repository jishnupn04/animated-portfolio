import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
function Navbar() {
  return (
    <div>
      <Sidebar />
      <motion.div
        className="navbar"
        animate={{ y: [-100, 0] }}
        transition={{ type: "tween", duration: 1 }}
      >
        <div className="wrapper">
          <motion.span
            className="logo"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            JISHNU NEEL
          </motion.span>
          <div className="socials">
            <a
              href="https://github.com/jishnupn04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github2.png" alt="GitHub" />
            </a>
            <a
              href="linkedin.com/in/jishnu-pn-6822762a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.png" alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/jishnu_neel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Navbar;
