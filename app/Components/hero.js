'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center h-screen text-white px-6 text-center bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Profile Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-pink-500 shadow-xl"
            >
                <img 
                    src="Aimalohi pics.jpg" 
                    alt="Emmanuella Ileogben" 
                    className="object-cover w-full h-full" 
                />
            </motion.div>

            {/* Heading */}
            <motion.h1 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            >
                Hi, I'm <span className="text-pink-500">Emmanuella Ileogben</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl mt-4 max-w-2xl text-gray-300 leading-relaxed mx-4"
            >
                I'm a Software Engineer passionate about web development, specializing in modern, responsive designs that drive traffic.
                <span className="text-white font-semibold"> Web Development</span>, 
                <span className="text-white font-semibold"> Cybersecurity</span>, and 
                <span className="text-white font-semibold"> Android Development</span>. 
                I thrive on solving complex problems and bringing ideas to life.
            </motion.p>

            {/* CTA Button */}
            <motion.a 
                href="#projects" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 px-6 py-3 text-lg font-medium rounded-md transition duration-300 
                bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 shadow-lg transform hover:scale-105"
            >
                View My Work
            </motion.a>
        </section>
    );
};

export default Hero;