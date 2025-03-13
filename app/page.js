"use client";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const Page = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: 'url("/Image7.jpg")' }}
    >
      {/* Header Section */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Experience Section */}
      <Experience />
      
      {/* About Section */}
      <About />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Footer Section */}
      <Footer />

      {/* Scroll-to-Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
      <button
  className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-full shadow-lg transition duration-300"
  onClick={scrollToTop}
  aria-label="Scroll to top"
>
          ↑
        </button>
      </div>
    </div>
  );
};

export default Page;