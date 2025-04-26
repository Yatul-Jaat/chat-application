import React from 'react';
import { FaComments, FaUserPlus } from 'react-icons/fa';

const Chatnoselection = () => {
  return (
    <div className="flex-1 h-screen bg-gradient-to-b from-[#0c1425] to-[#151f32] ">
      <div className="flex flex-col h-full  overflow-hidden border border-blue-500/20 bg-[#080c14]/80 backdrop-blur-sm shadow-xl">
        <div className="flex flex-col items-center justify-center h-full p-8 relative">
          {/* Background decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-md text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center border border-blue-500/30 shadow-lg shadow-blue-500/10">
              <FaComments className="w-12 h-12 text-blue-400" />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-3">No Conversation Selected</h2>
            <p className="text-gray-400 mb-8">
              Select a chat from the sidebar or start a new conversation to begin messaging.
            </p>
            
            
            
            <div className="mt-12 border-t border-blue-500/10 pt-6">
              <h3 className="text-blue-400 font-medium mb-4">Quick Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-500/5 p-3 rounded-lg border border-blue-500/10">
                  <p className="text-gray-300 text-sm">Search for users using the search bar</p>
                </div>
                <div className="bg-blue-500/5 p-3 rounded-lg border border-blue-500/10">
                  <p className="text-gray-300 text-sm">Click on a user to start a private conversation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatnoselection;