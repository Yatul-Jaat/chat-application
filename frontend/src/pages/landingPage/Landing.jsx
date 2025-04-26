import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { motion } from "motion/react"

const Landing = () => {
  return (
    <div className="bg-gradient-to-br from-[#080c14] to-[#10172a] min-h-screen w-full overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-indigo-500 blur-3xl"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center h-screen max-w-7xl mx-auto px-6 gap-12 relative z-10">
        <motion.div 
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 bg-blue-500 bg-opacity-20 rounded-full mb-2">
            <p className="text-white text-sm font-medium">WELCOME TO VARTALAP</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Unlock Your <span className="text-blue-500">Potential</span>
          </h1>
          
          <p className="text-gray-300 text-lg sm:text-xl max-w-lg">
            Vartalap is a revolutionary platform designed for people to seamlessly chat and celebrate achievements across communities.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <NavLink to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-blue-500/30">
              Get Started
              <FaArrowRight className="animate-pulse" />
            </NavLink>
            
            <NavLink to="/main" className="bg-transparent hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 border border-blue-500/50 hover:border-blue-400 transition-all">
              Learn More
            </NavLink>
          </div>
        </motion.div>
        
        {/* Image Section */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative w-full max-w-md p-2 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-sm"></div>
            <div className="rounded-2xl overflow-hidden relative z-10 border border-white/10">
              <img 
                src="/main_page.jpg" 
                alt="Vartalap Interface" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;