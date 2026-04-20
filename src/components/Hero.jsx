import React from "react";
import profilePic from "../assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 min-h-screen pt-16 md:pt-20">
      {/* Left: Profile Image with extended effect */}
      <div className="md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0">
        <div className="relative">
          <img
            src={profilePic}
            alt="Arun"
            className="w-80 md:w-96 lg:w-[500px] h-auto transition-transform duration-300 hover:scale-105 relative z-20 transform scale-110"
            style={{
              filter: "drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2))"
            }}
          />
          {/* Extended background effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-lg -z-10"></div>
        </div>
      </div>

      {/* Right: Text and Buttons */}
      <div className="md:w-1/2 text-center md:text-left relative z-10">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold mb-4">
          Arun
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          M.Sc Computer Science Graduate | Full Stack Developer
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* Download CV Button */}
          <a
            href="/Arun_CV.pdf"
            download
            className="bg-white text-indigo-600 font-semibold px-6 md:px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition text-center"
          >
            Download CV
          </a>
          
          {/* Contact Button */}
          <a
            href="#contact"
            className="border border-white font-semibold px-6 md:px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;