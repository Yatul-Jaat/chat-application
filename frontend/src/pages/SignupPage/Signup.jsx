import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaLock, FaArrowRight, FaIdCard } from 'react-icons/fa';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {
  const [Email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {loading,Signupdata}=useSignup()

  const handleSubmit = async(e) => {
    e.preventDefault();
    Signupdata({ username, Name, Email, password, confirmPassword })

  };

  return (
    <div className="bg-gradient-to-br from-[#080c14] to-[#10172a] h-screen w-full flex items-center justify-center px-4">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>
      
      <div className="flex w-full max-w-4xl h-auto max-h-screen relative z-10">
        {/* Left Section - Branding/Image */}
        <motion.div 
          className="hidden lg:block w-1/2 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-l-2xl p-6 backdrop-blur-sm border-l border-t border-b border-indigo-500/20"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/30">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-2xl mb-2">Join Vartalap</h3>
            <p className="text-gray-300 mb-4 max-w-xs text-sm">
              Create an account and start connecting with friends, colleagues, and communities.
            </p>
            <div className="max-w-xs">
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <p className="text-gray-300 text-xs">
                  "Signing up to Vartalap was the best decision for our team communication. It's simple yet powerful."
                </p>
                <p className="text-blue-300 text-xs mt-1">-Jezorb, Web Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Section - Sign Up Form */}
        <motion.div 
          className="w-full lg:w-1/2 bg-[#0f1629]/80 p-6 rounded-2xl lg:rounded-l-none lg:rounded-r-2xl backdrop-blur-sm border-r border-t border-b border-blue-500/10 overflow-y-auto max-h-screen"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mb-4">
            <h2 className="text-blue-400 font-bold text-2xl mb-1">Create Account</h2>
            <p className="text-gray-400 text-sm">Sign up to get started with Vartalap</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <label htmlFor="Email" className="text-xs text-gray-300 block">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-500 text-sm" />
                </div>
                <input
                  id="Email"
                  type="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#080c14] text-white w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition text-sm"
                  placeholder="Enter your Email"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="Name" className="text-xs text-gray-300 block">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaIdCard className="text-gray-500 text-sm" />
                </div>
                <input
                  id="Name"
                  type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#080c14] text-white w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition text-sm"
                  placeholder="Enter your full Name"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="username" className="text-xs text-gray-300 block">username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="text-gray-500 text-sm" />
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  className="bg-[#080c14] text-white w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition text-sm"
                  placeholder="Choose a username"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="password" className="text-xs text-gray-300 block">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-500 text-sm" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#080c14] text-white w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition text-sm"
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="confirm-password" className="text-xs text-gray-300 block">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-500 text-sm" />
                </div>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-[#080c14] text-white w-full pl-10 pr-4 py-2.5 rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition text-sm"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            
            <div className="pt-1">
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-2.5 px-4 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all cursor-pointer text-sm"
              >
                <p>Create Account</p>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{' '}
              <NavLink to="/login" className="text-blue-400 hover:text-blue-300">
                Sign in
              </NavLink>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;