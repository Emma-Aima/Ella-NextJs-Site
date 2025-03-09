import React from 'react';

const Projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js, showcasing my projects and skills.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    link: "https://github.com/Emma-Aima",
    image: "image2.png"
  },
  {
    title: "Secure Login System",
    description: "A user authentication system with JWT and bcrypt for secure password hashing.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://emmanuella-f5gk.vercel.app/",
    image: "Image3.png"
  },
  {
    title: "Android Notes App",
    description: "A simple Android app for creating and managing notes, built with Kotlin.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
    link: "https://www.linkedin.com/in/emmanuella-ileogben-13b024213/",
    image: "Image6.png"
  }
];

export default function Project() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-pink-500 shadow-lg text-shadow-lg">
  Projects
</h2>
        <p className="text-gray-400 text-lg mt-2">Here are some of the projects I've worked on.</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {Projects.map((project, index) => (
          <div 
          key={index} 
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
        >        
            <img 
  src={project.image} 
  alt={project.title} 
  className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-500 transform hover:scale-110"
/>
<h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
  {project.title}
</h3>
<h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
<p className="text-gray-400 mt-3">{project.description}</p>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, i) => (
                <span 
                key={i} 
                className="inline-block px-4 py-2 rounded-lg bg-pink-600 text-white text-sm font-medium"
              >
                  {tech}
                </span>
              ))}
            </div>

            {/* View Project Button */}
            <a 
  href={project.link} 
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-4 inline-block text-pink-400 font-semibold hover:text-pink-300 transition-all duration-300 underline"
>
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}