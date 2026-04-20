import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  // State for loading and messages
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Send data to backend
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      
      if (response.data.success) {
        setMessage("✅ Message sent successfully! I'll get back to you soon.");
        
        // Clear form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
      }
    } catch (error) {
      console.log("Error:", error);
      setMessage("❌ Failed to send message. Please try again or email me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#1A202C] text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact</h2>
          <div className="w-20 h-1 bg-[#6366F1] mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Get in Touch! Feel free to reach out to me for collaborations, opportunities, or just to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-[#6366F1]">Contact Information</h3>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#6366F1] p-3 rounded-lg mt-1">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">EMAIL ADDRESS</p>
                    <a 
                      href="mailto:aruntheprofessor@gmail.com" 
                      className="text-white font-medium text-lg hover:text-[#6366F1] transition-colors duration-300"
                    >
                      aruntheprofessor@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#6366F1] p-3 rounded-lg mt-1">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">PHONE NUMBER</p>
                    <a 
                      href="tel:+919345896973" 
                      className="text-white font-medium text-lg hover:text-[#6366F1] transition-colors duration-300"
                    >
                      +91-93458-96973
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#6366F1] p-3 rounded-lg mt-1">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LOCATION</p>
                    <p className="text-white font-medium text-lg">
                      Kovilpatti, Tamil Nadu, India - 628558
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#6366F1]">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/aruntheprofessor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-[#6366F1] transition duration-300"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/aruntheprofessor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-[#6366F1] transition duration-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://twitter.com/aruntheprofessor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-lg hover:bg-[#6366F1] transition duration-300"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-[#6366F1]">Send Message</h3>
            
            {/* Show success/error message */}
            {message && (
              <div className={`p-4 rounded-lg mb-6 ${
                message.includes("✅") ? "bg-green-600" : "bg-red-600"
              } text-white`}>
                {message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">First Name *</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] transition duration-300"
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] transition duration-300"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] transition duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Message *</label>
                <textarea 
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#6366F1] transition duration-300 resize-none"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#6366F1] text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;