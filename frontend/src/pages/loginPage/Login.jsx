import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {loading,Logindata}= useLogin()

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    await Logindata({ username, password })
  };

  return (
    <div className="bg-gradient-to-br from-[#080c14] to-[#10172a] min-h-screen w-full flex items-center justify-center px-4 py-12">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-500/5 blur-3xl"></div>
      </div>
      
      <div className="flex w-full max-w-4xl relative z-10">
        {/* Left Section - Login Form */}
        <motion.div 
          className="w-full lg:w-1/2 bg-[#0f1629]/80 p-8 rounded-l-2xl backdrop-blur-sm border-l border-t border-b border-blue-500/10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h2 className="text-blue-400 font-bold text-3xl mb-2">Welcome Back</h2>
            <p className="text-gray-400">Sign in to continue to Vartalap</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm text-gray-300 block">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-500" />
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-[#080c14] text-white w-full pl-10 pr-4 py-3 rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                  placeholder="Username"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-gray-300 block">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-500" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-[#080c14] text-white w-full pl-10 pr-4 py-3 rounded-xl border border-blue-500/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end">
              
              <div className="text-sm">
                <NavLink to="/login" className="text-blue-400 hover:text-blue-300">
                  Forgot your password?
                </NavLink>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all cursor-pointer"
              >
                Sign in
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <NavLink to="/signup" className="text-blue-400 cursor-pointer hover:text-blue-300">
                Sign up
              </NavLink>
            </p>
          </div>
        </motion.div>
        
        {/* Right Section - Branding/Image */}
        <motion.div 
          className="hidden lg:block w-1/2 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-r-2xl p-8 backdrop-blur-sm border-r border-t border-b border-blue-500/20"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-3xl mb-2">Vartalap</h3>
            <p className="text-gray-300 mb-6 max-w-xs">
              Connect with your community. Share ideas. Build relationships.
            </p>
            <div className="space-y-4 max-w-xs">
              <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <p className="text-gray-300 text-sm">
                  "Vartalap has transformed how our team communicates. It's intuitive and powerful."
                </p>
                <p className="text-blue-300 text-sm mt-2">-Jezorb, Web Developer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;