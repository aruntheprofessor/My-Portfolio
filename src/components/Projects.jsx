import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiStripe, SiFirebase, SiTailwindcss, SiFramer, SiJavascript, SiPostgresql, SiRedux } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Stripe", icon: <SiStripe className="text-purple-500" /> }
      ],
      category: "Web Development"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform fitness app with tracking and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: [
        { name: "React Native", icon: <SiReact className="text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-500" /> }
      ],
      category: "Mobile App"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> }
      ],
      category: "Web App"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio with modern design and smooth animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> }
      ],
      category: "Web Design"
    },
    {
      title: "Weather Dashboard",
      description: "Weather app with real-time forecasts and interactive maps.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "API Integration", icon: <FaExternalLinkAlt className="text-blue-400" /> },
        { name: "Chart.js", icon: <SiReact className="text-blue-500" /> }
      ],
      category: "Web App"
    },
    {
      title: "Social Media Analytics",
      description: "Analytics dashboard with data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      technologies: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "D3.js", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Express", icon: <SiNodedotjs className="text-green-500" /> }
      ],
      category: "Dashboard"
    },
    
  ];

  const handleViewGitHub = () => {
    window.open('https://github.com/aruntheprofessor', '_blank', 'noopener,noreferrer');
  };

 return (
  <section id="projects" className="bg-gradient-to-b from-[#0F172A] to-[#020617] min-h-screen py-24">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-4">
          My Projects
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A collection of projects demonstrating my experience in full-stack development,
          UI design and scalable web applications.
        </p>

        <button
          onClick={handleViewGitHub}
          className="mt-6 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          <FaGithub />
          View All Projects
          <FaExternalLinkAlt className="text-sm" />
        </button>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/20 transition duration-300"
          >

            {/* Image */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="p-6">

              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-1 bg-black/40 text-gray-300 px-2 py-1 rounded-md text-xs"
                  >
                    {tech.icon}
                    {tech.name}
                  </div>
                ))}
              </div>

              {/* Button */}
              <button
                onClick={handleViewGitHub}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-semibold transition"
              >
                <FaGithub />
                View Code
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  </section>
);
};

export default Projects;