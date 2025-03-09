import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="bg-gradient-to-b from-gray-100 to-white text-gray-900 py-16 px-6 md:px-12 lg:px-24 font-poppins">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h1 
                    className="text-5xl font-extrabold text-pink-500 tracking-wide"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Emmanuella Aimalohi Ileogben
                </motion.h1>
                <h2 className="text-2xl text-red-500 mt-3 font-semibold">
                    Website & Software Developer | AI Engineer
                </h2>
                <p className="text-gray-700 mt-6 leading-relaxed text-lg">
                    Passionate about building modern and responsive web applications, artificial intelligence, and secure coding.
                    I specialize in Next.js, React, and AI-powered solutions to solve real-world problems.
                </p>

                <div className="mt-10">
                    <h3 className="text-xl font-bold text-purple-500">Skills</h3>
                    <p className="text-gray-700 mt-2 text-lg">
                        Next.js, React, JavaScript, Application Development, Artificial Intelligence, Python, 
                        Tailwind CSS, HTML, Software Development, Web Development, Secure Coding, Node.js.
                    </p>
                </div>

                <div className="mt-10">
                    <h3 className="text-xl font-bold text-pink-500">Contact</h3>
                    <div className="flex justify-center space-x-4 mt-3">
                        <a href="mailto:aimalohiileogben@gmail.com" className="text-gray-700 hover:text-pink-500 text-2xl transition">
                            <FaEnvelope />
                        </a>
                        <a href="tel:+2348114304611" className="text-gray-700 hover:text-pink-500 text-2xl transition">
                            <FaPhone />
                        </a>
                        <a href="https://www.linkedin.com/in/emmanuella-ileogben-13b024213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 text-2xl transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/emma-aima" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 text-2xl transition">
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com/b_aimalohi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-500 text-2xl transition">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;