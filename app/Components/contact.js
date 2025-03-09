// 'use client';
// import React from "react";

"use client";
import React, { useState } from "react";  
import { motion } from "framer-motion";  
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";  

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Personal contact details
  const personalInfo = {
    email: 'aimalohiileogben@gmail.com',
    phone: '+2348114304611'
  };

  // Social links
  const contactLinks = [
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/emmanuella-ileogben-13b024213', icon: <FaLinkedin /> },
    { platform: 'GitHub', url: 'https://github.com/emma-aima/', icon: <FaGithub /> }
  ];

  // Handle form input changes 
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // Placeholder for form submission logic
    setStatus('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-800 to-black text-white py-16 px-6 md:px-12 lg:px-24">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-extrabold text-pink-500 mb-4">Contact Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          If you have any questions or want to collaborate, feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="mt-8 text-gray-300">
          <p className="flex items-center justify-center gap-2"><FaEnvelope className="text-pink-400"/> {personalInfo.email}</p>
          <p className="flex items-center justify-center gap-2"><FaPhone className="text-pink-400"/> {personalInfo.phone}</p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-4">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 text-2xl hover:scale-110 transition-transform"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-pink-400 font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 hover:ring-pink-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-pink-400 font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 hover:ring-pink-300"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-pink-400 font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 hover:ring-pink-300"
              rows="5"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 transition text-white font-bold rounded-md"
            whileHover={{ scale: 1.05 }}
          >
            Submit
          </motion.button>
        </motion.form>

        {/* Status Message */}
        {status && <p className="text-pink-400 mt-6">{status}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
