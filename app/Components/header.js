import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Emmanuella Ileogben</div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-10 text-lg">
            <li>
              <a href="#about" className="hover:text-gray-200 transition"></a>
            </li>

            <li>
              <a href="#experience" className="hover:text-gray-200 transition"></a>
            </li>

            <li>
              <a href="#projects" className="hover:text-gray-200 transition"></a>
            </li>

            <li>
              <a href="#contact" className="hover:text-gray-200 transition"></a>
            </li>

          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;