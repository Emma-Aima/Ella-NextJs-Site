// Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-8 text-center"
    >
      <p className="text-lg font-semibold">© 2025 Emmanuella Ileogben. All Rights Reserved.</p>
      <div className="flex justify-center mt-4 space-x-6">
        <a 
          href="https://linkedin.com/in/emmanuella-ileogben" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-400 hover:text-purple-500 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={28} />
        </a>
        <a 
          href="https://github.com/emma-aima" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-400 hover:text-purple-500 transition-transform transform hover:scale-110"
        >
          <FaGithub size={28} />
        </a>
        <a 
          href="https://twitter.com/emmanuella" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-400 hover:text-purple-500 transition-transform transform hover:scale-110"
        >
          <FaTwitter size={28} />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;