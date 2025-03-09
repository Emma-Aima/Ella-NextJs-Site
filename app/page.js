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

  // Define the status variable
  const status = 'loading'; // Replace with actual logic to determine status

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/Image7.jpg")' }}
    >
      {/* Header Section */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Other sections */}
      <Experience />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </div>
  );
};

export default Page;