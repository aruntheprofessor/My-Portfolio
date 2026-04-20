import React from "react";
import { FaUser, FaCalendar, FaMapMarkerAlt, FaLinkedin, FaEnvelope, FaPhone, FaFolder, FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-[#1A202C] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer with a strong foundation in computer science. 
            I specialize in building scalable web applications using modern technologies.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full space-y-12">
            {/* Personal Info */}
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-[#6366F1]">Personal Info</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {/* Name */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6366F1] p-3 rounded-lg">
                      <FaUser className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg">Name</p>
                      <p className="text-white font-medium text-xl">Arun</p>
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6366F1] p-3 rounded-lg">
                      <FaCalendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg">Date of birth</p>
                      <p className="text-white font-medium text-xl">February 24, 2003</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6366F1] p-3 rounded-lg">
                      <FaMapMarkerAlt className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg">Address</p>
                      <p className="text-white font-medium text-xl">Kovilpatti, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  {/* LinkedIn */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6366F1] p-3 rounded-lg">
                      <FaLinkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/aruntheprofessor" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white font-medium text-xl hover:text-[#6366F1] transition-colors duration-300"
                      >
                        aruntheprofessor
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6366F1] p-3 rounded-lg">
                      <FaEnvelope className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg">Email</p>
                      <a 
                        href="mailto:aruntheprofessor@gmail.com"
                        className="text-white font-medium text-xl hover:text-[#6366F1] transition-colors duration-300"
                      >
                        aruntheprofessor@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#6366F1] p-3 rounded-lg">
                      <FaPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-lg">Phone</p>
                      <a 
                        href="tel:+919345896973"
                        className="text-white font-medium text-xl hover:text-[#6366F1] transition-colors duration-300"
                      >
                        +91-93458-96973
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Completed and Download Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Projects Completed */}
              <div className="bg-gray-800 rounded-lg p-8 flex-1 text-center hover:bg-gray-700 transition duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#6366F1] p-4 rounded-full">
                    <FaFolder className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-[#6366F1] mb-3">5+</div>
                <div className="text-white font-medium text-xl">Projects Completed</div>
              </div>

              {/* Download CV Button */}
              <div className="flex-1 flex justify-center md:justify-end">
                <a
                  href="/Arun_CV.pdf"
                  download
                  className="bg-[#6366F1] text-white font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-indigo-700 duration-300 inline-flex items-center text-lg hover:scale-105 transform transition-transform"
                >
                  <FaDownload className="w-6 h-6 mr-3" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;