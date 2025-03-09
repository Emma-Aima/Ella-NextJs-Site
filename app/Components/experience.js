'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="text-white py-12 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-800">
            <motion.div 
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl font-extrabold text-pink-500 mb-6 drop-shadow-lg">
                    My Experience as a Software Engineer
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I'm a Software Engineer passionate about web development, with expertise in creating modern, responsive websites that are optimized for conversions.
                    I specialize in building user-friendly experiences that drive traffic and boost online presence.
                </p>
                <motion.div 
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl"
                >
                    <p className="text-lg text-gray-200 leading-relaxed mb-4">
                        <strong className="text-white">Artificial Intelligence & Software Engineer and Programmer</strong>
                        - As a freelance web developer, I build modern, responsive websites that are optimized for user experience and conversions.
                    </p>
                </motion.div>
                <p className="text-lg text-gray-300 leading-relaxed mt-6">
                    With several years of experience in developing and deploying secure web applications, I am confident in making significant contributions to teams.
                    I thrive in fast-paced environments and excel at problem-solving.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-6">
                    My expertise spans designing modern websites, analyzing data sets, and implementing best programming practices to create robust, user-friendly applications.
                    I am always eager to learn, adapt, and innovate within the tech industry.
                </p>
            </motion.div>
        </section>
    );
};

export default Experience;
